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
		console.info('[server] Creating new server');
        global.server = http.createServer();
        configureHttpServer(global.server);
        global.server.listen(port, () => {
            console.log(`[server] Listening on http://0.0.0.0:${port}/`)
        });
    } else {
		console.info('[server] Updating existing server');
        global.server.removeAllListeners('request');
        configureHttpServer(global.server);
    }
}



const configureHttpServer = (server) => {
    console.info('[server] Configure server');
    const expressApp = express();



	const template = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf8');
	const clientLoadableStatsFile = path.resolve(__dirname, '../build/loadable-stats.json');
	const serverRenderer = requireUncached(path.resolve(__dirname, '../build.server/index.js')).default;
	const basename = '';

	const serverLoader = (request, response) => {
		log.info('[redux] Serving ' + request.url + ' (' + request.path + ')')

		const {renderedString, helmet, clientExtractor, preloadedState} = serverRenderer(request, clientLoadableStatsFile, basename);

		let output = template

		output = output.replace('<html>', `<html ${helmet.htmlAttributes.toString()}>`)
		output = output.replace(/<title>.*?<\/title>/g, helmet.title.toString())
		output = output.replace('</head>', `<!--helmet.meta-->${helmet.meta.toString()}<!--/helmet.meta--></head>`)
		// output = output.replace('</head>', `<!--loadable.link-->${clientExtractor.getLinkTags()}<!--/loadable.link--></head>`)
		output = output.replace('</head>', `<!--loadable.style-->${clientExtractor.getStyleTags()}<!--/loadable.style--></head>`)
		output = output.replace(
		  '<div id="root"></div>',
		  `<div id="root"><!--react.render-->${renderedString}<!--react.render--></div><!--redux.state--><script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script><!--redux.state-->`
		);
		output = output.replace('</body>', `<!--loadable.script-->${clientExtractor.getScriptTags()}<!--/loadable.script--></body>`)
	
		response.send(output);
	}

	
	expressApp.use(express.Router().get(basename, serverLoader));
	expressApp.use(basename, express.static(path.resolve(__dirname, '../build')));
    expressApp.use(serverLoader)
    
    server.on('request', expressApp);
};
  

main();

chokidar.watch(['build.server/index.js', 'build/index.html', 'build/asset-manifest.json'])
    .on('change', (event, path) => {
        console.log('[watcher] File(s) changed');
        main();
    });