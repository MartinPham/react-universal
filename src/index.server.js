import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {ChunkExtractor} from '@loadable/server';
import {Provider} from 'react-redux';
import {StaticRouter as Router, matchPath} from 'react-router';
import {ServerStyleSheets} from '@material-ui/core/styles';
import {createMemoryHistory as createHistory} from 'history';
import sharedHistory from 'utils/sharedHistory';
import store from 'utils/redux/store';
import resetStack from 'components/Navigator/actions/resetStack';
import Helmet from 'react-helmet';
import log from 'loglevel';
import App from 'components/App';
import routes from 'config/routes';
import 'styles.scss';


export default async (request, clientLoadableStatsFile, basename = '') => {
	log.info('[index] React Server App. Basename = ' + basename)

	const history = sharedHistory(createHistory({
		initialEntries: [request.path]
	}))

	history.basename = basename

	const reduxStore = store()
	const locationKey = history.location.key

	log.info('[redux] Gonna reset Navigator stack', history.location)
	reduxStore.dispatch(resetStack(history.location))

	const routeKeys = Object.keys(routes)
	let pageInitialData = null

	for(let routeId of routeKeys)
	{
		const route = routes[routeId]
		const match = matchPath(request.path, basename + route.path)

		if(match !== null)
		{
			log.info('[router] matched', routeId, route)

			log.info('[router] loading page inital data')
			try {
				pageInitialData = await require('./pages/' + route.page + '/data.js').default({
					route: {...route},
					location: {...history.location},
					params: {...match.params},
					queryParams: {...request.query},
				})	
			} catch (error)
			{
				log.info('[router] page inital data error', error)
			}


			log.info('[router] page inital data loaded')
			break
		}
	}
	
	const sheets = new ServerStyleSheets();

	const createApp = (AppComponent) => (
		<Provider store={reduxStore}>
			<Router location={request.path} history={history}>
				<AppComponent pageData={{
					[locationKey]: pageInitialData
				}}/>
			</Router>
		</Provider>
	)

	const clientExtractor = new ChunkExtractor({ statsFile: clientLoadableStatsFile })

	const renderedString = ReactDOMServer.renderToString(
		clientExtractor.collectChunks(sheets.collect(createApp(App)))
	)

	const helmet = Helmet.renderStatic()

	const preloadedState = reduxStore.getState()

	const extraCss = sheets.toString();

	const extraJs = `var jssStyles=document.querySelector('#jss-server-side');if(jssStyles){jssStyles.parentNode.removeChild(jssStyles);}</script>`

	return {
		renderedString,
		extraCss,
		extraJs,
		helmet,
		clientExtractor,
		preloadedState,
		pageData: {
			[locationKey]: pageInitialData
		},
	}
}

