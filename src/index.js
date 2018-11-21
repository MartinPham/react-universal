import React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import { Frontload } from 'react-frontload';
import { ConnectedRouter } from 'connected-react-router';
import createStore from './utils/redux/createStore';
import rootSaga from "./saga";
import { Route } from 'react-router-dom';

import routes from './config/routes';
import App from './components/App';
import './index.css';

// Create a store and get back itself and its history object
const { store, history } = createStore();



store.runSaga(rootSaga);

// Running locally, we should run on a <ConnectedRouter /> rather than on a <StaticRouter /> like on the server
// Let's also let React Frontload explicitly know we're not rendering on the server here
const index = (appComponent) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Frontload noServerRender={true}>
          <div id="appContainer" key="appContainer">
              { appComponent }
          </div>
      </Frontload>
    </ConnectedRouter>
  </Provider>
);

const appProps = {
    routeComponent: Route,
    routes,
};

const root = document.querySelector('#root');

if (root.hasChildNodes() === true) {
    console.log('hydrate')
  // If it's an SSR, we use hydrate to get fast page loads by just
  // attaching event listeners after the initial render
  Loadable.preloadReady().then(() => {
    hydrate(index(<App {...appProps}/>), root);
  });
} else {
    console.log('render')
  // If we're not running on the server, just render like normal
  render(index(<App {...appProps}/>), root);

  if (module.hot) {
    module.hot.accept('./components/App', () => {
        console.log('hot render')
      const NextApplication = require('./components/App').default;
      render(index(<NextApplication {...appProps}/>), root);
    })
  }
}