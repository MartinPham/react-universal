import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter as Router } from 'react-router';
import { Frontload, frontloadServerRender } from 'react-frontload';
import Loadable from 'react-loadable';
import Helmet from 'react-helmet';
import createHistory from 'history/createMemoryHistory';


import App from './components/App';
import log from 'utils/log';
import saga from './components/App/saga';

import configureStore from './utils/redux/configureStore';


export default (html, manifest, liveReloadServer) => (req, res) => {

	const history = createHistory();
	const store = configureStore({}, history);

	store.runSaga(saga);

	const context = {};
    const modules = [];

	frontloadServerRender(() =>
		ReactDOMServer.renderToString(
			<Loadable.Capture report={m => modules.push(m)}>
				<Provider store={store}>
					<Router location={req.url} context={context}>
						<Frontload isServer={true}>
			            	<App history={history}/>
			            </Frontload>
					</Router>
				</Provider>
			</Loadable.Capture>
		)
	).then(routeMarkup => {

		const injectHTML = (data, { html, title, meta, body, scripts, state }) => {
			data = data.replace('<html>', `<html ${html}>`);
			data = data.replace(/<title>.*?<\/title>/g, title);
			data = data.replace('</head>', `${meta}</head>`);
			data = data.replace(
			  '<div id="root"></div>',
			  `<div id="root">${body}</div><script>window.__PRELOADED_STATE__ = ${state}</script>`
			);
			data = data.replace('</body>', scripts.join('') + '</body>');

			if (liveReloadServer !== null)
			{
				data = data.replace('</body>', `
					<script>
						var socket = new WebSocket('ws://${liveReloadServer}');
						socket.addEventListener('open', function (event) {
						});
						socket.addEventListener('message', function (event) {
						    if(event.data == 'rebuild')
						    {	
						    	console.log('Server Rebuilding...');
						    } else if(event.data == 'reload')
						    {	
						    	setTimeout(function(){ location.reload() }, 2000);
						    	document.querySelector('body').innerHTML = 'Reloading...';
						    }
						});
					</script>
					` + '</body>');
			}
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
			body: routeMarkup,
			scripts: extraChunks,
			state: JSON.stringify(store.getState()).replace(/</g, '\\u003c')
		});

		res.send(output);
	});
}

