import React from 'react';
import ReactDOMServer from 'react-dom/server';
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

export default (basename, html, manifest) => (req, res) => {
	log.info('[redux] Serving ' + req.url + ' (' + req.path + ')')

	const history = sharedHistory(createHistory({
		initialEntries: [req.path]
	}))
	const store = createStore(initialState)

	log.info('[redux] Gonna reset Navigator stack', history.location)
	store.dispatch(resetStack(history.location))

	const createApp = (AppComponent) => (
		<Provider store={store}>
			<Router basename={basename} location={req.url} context={context} history={history}>
				<App/>
			</Router>
		</Provider>
	)

	const context = {};
	const modules = [];
	
	const markupString = ReactDOMServer.renderToString(
		createApp(App)
	)

	const injectHTML = (data, { html, title, meta, body, scripts, state }) => {
		data = data.replace('<html>', `<html ${html}>`);
		data = data.replace(/<title>.*?<\/title>/g, title);
		data = data.replace('</head>', `${meta}</head>`);
		data = data.replace(
		  '<div id="root"></div>',
		  `<div id="root">${body}</div><script>window.__PRELOADED_STATE__ = ${state}</script>`
		);
		data = data.replace('</body>', scripts.join('') + '</body>');
		
		return data;
	};

	const extractAssets = (assets, chunks) =>
		Object.keys(assets)
			.filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
			.map(k => assets[k]);

	const extraChunks = extractAssets(manifest, modules).map(
		c => `<script type="text/javascript" src="/${c.replace(/^\//, '')}"></script>`
	);

	const helmet = Helmet.renderStatic();
	
	const output = injectHTML(html, {
		html: helmet.htmlAttributes.toString(),
		title: helmet.title.toString(),
		meta: helmet.meta.toString(),
		body: markupString,
		scripts: extraChunks,
		state: JSON.stringify(store.getState()).replace(/</g, '\\u003c')
	});

	res.send(output);
}

