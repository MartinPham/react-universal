import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {ChunkExtractor} from '@loadable/server';
import {Provider} from 'react-redux';
import {StaticRouter as Router} from 'react-router';
import {createMemoryHistory as createHistory} from 'history';
import sharedHistory from 'utils/sharedHistory';
import createStore from 'utils/redux/createStore';
import initialState from 'config/state';
import resetStack from 'components/Navigator/actions/resetStack';
import Helmet from 'react-helmet';
import log from 'loglevel';
import App from 'components/App';
import 'styles.scss';


export default (request, clientLoadableStatsFile, basename = '') => {
	log.info('[index] React Render App (' + request.path + ')')

	const history = sharedHistory(createHistory({
		initialEntries: [request.path]
	}))
	const store = createStore(initialState)

	log.info('[redux] Gonna reset Navigator stack', history.location)
	store.dispatch(resetStack(history.location))

	const createApp = (AppComponent) => (
		<Provider store={store}>
			<Router basename={basename} location={request.url} history={history}>
				<AppComponent/>
			</Router>
		</Provider>
	)

	const clientExtractor = new ChunkExtractor({ statsFile: clientLoadableStatsFile })

	let renderedString = ReactDOMServer.renderToString(
		clientExtractor.collectChunks(createApp(App))
	)

	const helmet = Helmet.renderStatic()

	const preloadedState = store.getState()

	return {
		renderedString,
		helmet,
		clientExtractor,
		preloadedState
	}
}

