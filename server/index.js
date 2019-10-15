const http = require('http');
const path = require('path');
const express = require('express');
const chokidar = require('chokidar');
const fs = require('fs');

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



	const template = fs.readFileSync(path.resolve(__dirname, '../build/index.html'), 'utf8');
	const manifest = require(path.resolve(__dirname, '../build/asset-manifest.json'));

	const pathname = '';
	const ssr = requireUncached(path.resolve(__dirname, '../build.server/index.js'))
				.default(pathname, template, manifest);
	
	expressApp.use(express.Router().get(pathname, ssr));
	expressApp.use(pathname, express.static(path.resolve(__dirname, '../build')));

    expressApp.use(ssr)
    
    server.on('request', expressApp);
};
  

main();

chokidar.watch(['build.server/index.js', 'build/index.html', 'build/asset-manifest.json'])
    .on('change', (event, path) => {
        console.log('[watcher] File(s) changed');
        main();
    });