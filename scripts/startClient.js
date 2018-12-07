process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';


const clearModule = require('clear-module');
clearModule.all();

const http = require('http');


let port = Number(process.argv[2]);

http.get('http://localhost:' + port + '/___stop___', (resp) => {
	console.log('> Stopping previous server...');

	run();
})
.on('error', (error) => {
	run();
})
.end();









const run = () => {
	const findFreePort = require("find-free-port");

	findFreePort(port, port + 100, function(err, port){
		const npmRun = require('npm-run');
		const path = require('path');
		const fs = require('fs');
		const ipAddress = require('ip').address();
		const qrcode = require('qrcode-terminal');

		const package = require(path.resolve(__dirname, '../package.json'));
		const homepage = package.homepage;

		const url = new URL(homepage);
		const pathname = url.pathname;


		const chokidar = require('chokidar');

		let watchTimer = null;
					
		let buildingFlag = path.resolve(__dirname, '../.building');
		let buildingAllFlag = path.resolve(__dirname, '../.building-all');

		let chokidarInited = false;
		chokidar.watch([
			path.resolve(__dirname, '../build/'),
			path.resolve(__dirname, '../build-server'),
		], {})
		.on('all', (event, path) => {
			// console.log('changed', path);
			clearTimeout(watchTimer);

			watchTimer = setTimeout(() => {
				if (
					fs.existsSync(buildingFlag)
					|| fs.existsSync(buildingAllFlag)
				) {
					// console.log('still building');
				} else {

					if(!chokidarInited)
					{
						chokidarInited = true;
						return;
					}
					console.log('> New builds are ready');

					console.log('> Restarting...');
					http.get('http://localhost:' + port + '/___restart___', (resp) => {
						console.log('> Restarted');
					});
				}
			}, 1000);
		});


		let chokidarSourceInited = false;
		let watchSourceTimer = null;
		chokidar.watch([
			path.resolve(__dirname, '../src/'),
		], {})
		.on('all', (event, path) => {
			// console.log('src changed', path);
			clearTimeout(watchSourceTimer);

			watchSourceTimer = setTimeout(() => {
				if (
					fs.existsSync(buildingFlag)
					|| fs.existsSync(buildingAllFlag)
				) {
					// console.log('src watch: still building');
				} else {

					if(!chokidarSourceInited)
					{
						chokidarSourceInited = true;
						return;
					}
					console.log('> Source changes detected');

					console.log('> Rebuilding....');
					for(let i in clients)
					{
						clients[i].send('rebuild');
					}
					// npmRun.exec('npm run build:all', {}, (err, stdout, stderr) => {
					// 	console.log(stdout);
					// });
					console.log(npmRun.sync('npm run build').toString('utf8'));
					console.log('> Finished building, gonna restart soon..');
				}
			}, 1000);
		});




		const childProcess = require("child_process");

		// Express requirements
		const bodyParser = require('body-parser');
		const compression = require('compression');
		const express = require('express');
		// const Loadable = require('react-loadable');
		const cookieParser = require('cookie-parser');


		
		// Create our express app using the port optionally specified
		let app = express();

		const clients = [];


		// Compress, parse, log, and raid the cookie jar
		app.use(compression());
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: false }));
		// app.use(morgan('dev'));
		app.use(cookieParser());

		// var html = fs.readFileSync(htmlFile, 'utf8');

		// var manifest = require(manifestFile);
		// var loader = require(serverFile).default(html, manifest, ipAddress + ':' + port);

		app.get('/___stop___', function (req, res) {
			res.send('Bye bye');
			process.exit(0);
		});
		app.get('/___restart___', function (req, res) {
			res.send('Restarting');

			for(let i in clients)
			{
				clients[i].send('reload');
			}

			const argv = process.argv;
			argv[2] = port;
			const excutable = argv.shift();
			childProcess.spawn(excutable, argv, {
		    	cwd: process.cwd(),
		    	detached : true,
		    	stdio: "inherit"
		    });


		  process.exit(0);

		})

		// app.use(express.Router().get('/', loader));
		app.use(pathname, express.static(path.resolve(__dirname, '../build')));
		// app.use(reload(path.resolve(__dirname, '../build')));
		// app.use(express.static(path.resolve(__dirname, '../server-build')));
		// app.use(loader);

		// We tell React Loadable to load all required assets and start listening - ROCK AND ROLL!
		// Loadable.preloadAll().then(() => {
			let WSServer = require('ws').Server;
			let server = require('http').createServer();

			// Create web socket server on top of a regular http server
			let wss = new WSServer({
				server: server
			});

			// Also mount the app here
			server.on('request', app);

			wss.on('connection', function connection(ws) {
				clients.push(ws);
			});


			server.listen(port, function() {
				console.log(`> Server is listening on http://localhost:${port}${pathname} (External http://${ipAddress}:${port}${pathname})`);
				console.log(``);
				qrcode.generate(`http://${ipAddress}:${port}${pathname}`);
			});
			// server = app.listen(port, () => {
			// 	console.log(`> Server is listening on http://localhost:${port} (External http://${ipAddress}:${port})`);
			// });
		// });



	});


}