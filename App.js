import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createStore from './src/utils/redux/createStore';
import { Route } from 'react-router-native';
import rootSaga from "./src/saga";

import App from './src/components/App';
import routes from "./src/config/nativeRoutes";

// Create a store and get back itself and its history object
const { store, history } = createStore();

store.runSaga(rootSaga);

const appProps = {
    routeComponent: Route,
    routes,
};

export default class Component extends React.Component {
  render() {
    return (
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <App {...appProps}/>
    </ConnectedRouter>
  </Provider>
    );
  }
}