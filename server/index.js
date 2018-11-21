const server = require('./server');
server(
  (app) => {
    app.listen(4000, console.log(`SSR is running`));
  }
);