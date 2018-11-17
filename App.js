import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createStore from './src/utils/redux/createStore';
import rootSaga from "./src/saga";

import App from './src/components/App';

// Create a store and get back itself and its history object
const { store, history } = createStore();

store.runSaga(rootSaga);


export default class Component extends React.Component {
  render() {
    return (
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <App/>
    </ConnectedRouter>
  </Provider>
    );
  }
}