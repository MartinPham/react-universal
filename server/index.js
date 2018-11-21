// Express requirements
const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const forceDomain = require('forcedomain');
const Loadable = require('react-loadable');
const cookieParser = require('cookie-parser');

// Our loader - this basically acts as the entry point for each page load
const server = require('../server-build');

// Create our express app using the port optionally specified
const app = express();
const PORT = process.env.PORT || 4000;

// NOTE: UNCOMMENT THIS IF YOU WANT THIS FUNCTIONALITY
/*
  Forcing www and https redirects in production, totally optional.

  http://mydomain.com
  http://www.mydomain.com
  https://mydomain.com

  Resolve to: https://www.mydomain.com
*/
// if (process.env.NODE_ENV === 'production') {
//   app.use(
//     forceDomain({
//       hostname: 'www.mydomain.com',
//       protocol: 'https'
//     })
//   );
// }

// Compress, parse, log, and raid the cookie jar
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cookieParser());

// Set up homepage, static assets, and capture everything else
const htmlFile = path.resolve(__dirname, '../build/index.html');
const loader = (req, res) => server.default(htmlFile, req, res);
app.use(express.Router().get('/', loader));
app.use(express.static(path.resolve(__dirname, '../build')));
// app.use(express.static(path.resolve(__dirname, '../server-build')));
app.use(loader);

// We tell React Loadable to load all required assets and start listening - ROCK AND ROLL!
Loadable.preloadAll().then(() => {
  app.listen(PORT, console.log(`App listening on port ${PORT}!`));
});

// Handle the bugs somehow
app.on('error', error => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof PORT === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});





/*
const express = require('express');
const render = require('../server-build');
const path = require('path');
const fs = require('fs');

const server = express();
const port = 8080;

server.get('/', (request, response) => {
	return render.default(
    path.resolve(__dirname, '../build/index.html'),
    request, 
    response
  );
});


// server.use(express.static(path.resolve(__dirname, '../server-build')));
server.use(express.static(path.resolve(__dirname, '../build')));

server.listen(port, () => console.log(`Server is listening on port ${port}!`))
*/


