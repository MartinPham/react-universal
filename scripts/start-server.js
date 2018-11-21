process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';
process.env.GENERATE_SOURCEMAP = false;

const path = require('path');
// const Loadable = require('react-loadable');
const express = require('express')
const webpack = require('webpack')
// const noFavicon = require('express-no-favicons')
const webpackDevMiddleware = require('webpack-dev-middleware')
// const webpackHotMiddleware = require('webpack-hot-middleware')
// const webpackHotServerMiddleware = require('webpack-hot-server-middleware')

const serverConfig = require('./build.config');
serverConfig.name = 'server';

const clientConfig = require('react-scripts/config/webpack.config.prod');
clientConfig.name = 'client';

const WebSocket = require('ws')

const PORT = 4000;
const WS_PORT = 4141;

const wss = new WebSocket.Server({ port: WS_PORT })

// const clientConfigProd = require('../webpack/client.prod')
// const serverConfigProd = require('../webpack/server.prod')

// console.log(clientConfig.name, serverConfig.name);die;

// const { publicPath } = clientConfig.output
// const outputPath = clientConfig.output.path
// const DEV = process.env.NODE_ENV === 'development'
// const app = express()
// app.use(noFavicon())

// let isBuilt = false

// const done = () =>
//   !isBuilt &&
//   app.listen(4000, () => {

//   // console.log( devMiddleware.fileSystem.readFileSync(clientConfig.output.path + '/index.html'));return;


//     isBuilt = true
//     console.log('BUILD COMPLETE -- Listening @ http://localhost:3000'.magenta)
//   })

    // Loadable.preloadAll().then(() => {

// if (DEV) {
  const compiler = webpack([clientConfig, serverConfig])



  // const clientCompiler = compiler.compilers[0]

  // const devMiddleware = webpackDevMiddleware(compiler,  { 
  //   // publicPath, 
  //   // stats: { 
  //   //   colors: true 
  //   // }, 
  //   // serverSideRender: true 
  // })
  
  let ssr = null;

  const wsc = [];
  // let wscc = null;

  wss.on('connection', ws => {
    // wscc = ws;
    wsc.push(ws);
    // console.log('connect', ws)
  })

  const reloadServer = () => {
    const serverFile = '../server/server';

    server = require(serverFile);
    delete require.cache[require.resolve(serverFile)];

    server(
      (app) => {
        ssr = app.listen(PORT, console.log(`Server is running`));

        
          for(var i in wsc)
          {
            try {
              wsc[i].send('reload');
            } catch(e){}
          }

      },
      WS_PORT
    );
  }

  const watching = compiler.watch({
    // Example watchOptions
    aggregateTimeout: 300,
    poll: undefined
  }, (err, stats) => {
    console.log('BUILD COMPLETED');


    if(ssr !== null){
      ssr.close(reloadServer);
    } else {
      reloadServer();
    }



  });

  // compiler.run((err, stats) => {
  // });

  // devMiddleware.waitUntilValid(() => {
  //   console.log('VALID');
  //   require(path.resolve(__dirname, '../server/index.js'));
  // });


  // app.use(devMiddleware)
  // app.use(webpackHotMiddleware(clientCompiler))

  // app.use(webpackHotServerMiddleware(compiler, {
  //   serverRendererOptions: {
  //     devMiddleware: devMiddleware,
  //     clientConfig: clientConfig
  //   }
  // }))



  // devMiddleware.waitUntilValid(() => {
  //   // let fs = devMiddleware.fileSystem;

  //   // let htmlData = fs.readFileSync(clientConfig.output.path + '/index.html', 'utf-8');
  //   // fs.unlinkSync(clientConfig.output.path + '/index.html');
  //   // fs.writeFileSync(clientConfig.output.path + '/index-tmp.html', 'utf-8');


  //   // fs.renameSync(clientConfig.output.path + '/index.html', clientConfig.output.path + '/index-tmp.html');

  //     app.listen(4000, () => {
  //       console.log('BUILD COMPLETE -- Listening @ http://localhost:3000'.magenta)
  //     })

  // });
// }
// else {
//   webpack([clientConfigProd, serverConfigProd]).run((err, stats) => {
//     const clientStats = stats.toJson().children[0]
//     const serverRender = require('../buildServer/main.js').default

//     app.use(publicPath, express.static(outputPath))
//     app.use(serverRender({ clientStats }))

//     done()
//   })
// }
    // });

