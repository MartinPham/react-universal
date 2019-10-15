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
import log from 'loglevel';

import App from 'components/App';
import 'styles.scss';

import Helmet from 'react-helmet';

log.setLevel('info');

export default (basename, template, manifest, serverLoadableStatsFile, clientLoadableStatsFile) => (req, res) => {
	log.info('[redux] Serving ' + req.url + ' (' + req.path + ')')

	const history = sharedHistory(createHistory({
		initialEntries: [req.path]
	}))
	const store = createStore(initialState)

	log.info('[redux] Gonna reset Navigator stack', history.location)
	store.dispatch(resetStack(history.location))

	const createApp = (AppComponent) => (
		<Provider store={store}>
			<Router basename={basename} location={req.url} history={history}>
				<App/>
			</Router>
		</Provider>
	)


	// const serverExtractor = new ChunkExtractor({ statsFile: serverLoadableStatsFile })
	const clientExtractor = new ChunkExtractor({ statsFile: clientLoadableStatsFile })

	let result = ReactDOMServer.renderToString(
		clientExtractor.collectChunks(createApp(App))
	)

	const helmet = Helmet.renderStatic()

	const preloadedState = store.getState()

	let output = template

	output = output.replace('<html>', `<html ${helmet.htmlAttributes.toString()}>`)
	output = output.replace(/<title>.*?<\/title>/g, helmet.title.toString())
	output = output.replace('</head>', `${helmet.meta.toString()}</head>`)
	output = output.replace('</head>', `${clientExtractor.getLinkTags()}</head>`)
	output = output.replace('</head>', `${clientExtractor.getStyleTags()}</head>`)
	output = output.replace(
	  '<div id="root"></div>',
	  `<div id="root">${result}</div><script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script>`
	);
	output = output.replace('</body>', `${clientExtractor.getScriptTags()}</body>`)






	res.send(output);
}

