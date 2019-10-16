const http = require('http');
const path = require('path');
const express = require('express');
const chokidar = require('chokidar');
const fs = require('fs');
const log = require('loglevel');
log.setLevel('info');
const port = 8088;

const requireUncached = (module) => {
    delete require.cache[require.resolve(module)]
    return require(module)
}

const main = () => {
    if(!global.server)
    {
		log.info('[server] Creating new server');
        global.server = http.createServer();
        configureHttpServer(global.server);
        global.server.listen(port, () => {
            log.info(`[server] Listening on http://0.0.0.0:${port}/`)
        });
    } else {
		log.info('[server] Updating existing server');
        global.server.removeAllListeners('request');
        configureHttpServer(global.server);
    }
}



const configureHttpServer = (server) => {
    log.info('[server] Configure server');
    const expressApp = express();



	const template = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf8');
	const clientLoadableStatsFile = path.resolve(__dirname, '../build/loadable-stats.json');
	const serverRenderer = requireUncached(path.resolve(__dirname, '../build.server/index.js')).default;
	const basename = '';

	const serverLoader = async (request, response) => {
		log.info('[loader] Serving ' + request.url + ' (' + request.path + ')')

		const {renderedString, helmet, clientExtractor, preloadedState, pageData} = await serverRenderer(request, clientLoadableStatsFile, basename);

		let output = template

		let injectScript = '';
		if(preloadedState && preloadedState.Navigator && preloadedState.Navigator.location)
		{
			injectScript += `window.history.replaceState({ key: '${preloadedState.Navigator.location.key}', state: {}}, '')`;
		}


		output = output.replace('<html>', `<html ${helmet.htmlAttributes.toString()}>`)
		output = output.replace(/<title>.*?<\/title>/g, helmet.title.toString())
		output = output.replace('</head>', `${helmet.meta.toString()}</head>`)
		// output = output.replace('</head>', `${clientExtractor.getLinkTags()}</head>`)
		output = output.replace('</head>', `${clientExtractor.getStyleTags()}</head>`)
		output = output.replace(
		  '<div id="root"></div>',
		  `<div id="root">${renderedString}</div>
		  <script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script>
		  <script>window.__PAGE_DATA__ = ${JSON.stringify(pageData).replace(/</g, '\\u003c')}</script>
		  <script>${injectScript}</script>`
		);
		output = output.replace('</body>', `${clientExtractor.getScriptTags()}</body>`)
	
		response.send(output);
	}
	
	expressApp.use(express.Router().get(basename, serverLoader));
	expressApp.use(basename, express.static(path.resolve(__dirname, '../build')));
    expressApp.use(serverLoader)
    
    server.on('request', expressApp);
};
  

main();

chokidar.watch(['server/index.js', 'build.server/index.js', 'build/index.html', 'build/asset-manifest.json'])
    .on('change', (event, path) => {
        log.warn('[watcher] File(s) changed');
        main();
    });