import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import * as serviceWorker from 'serviceWorker';
import {Router} from 'react-router';
import {loadableReady} from '@loadable/component';
import {createBrowserHistory as createHistory} from 'history';
import sharedHistory from 'utils/sharedHistory';
import createStore from 'utils/redux/createStore';
import initialState from 'config/state';
import resetStack from 'components/Navigator/actions/resetStack';
import log from 'loglevel';

import App from 'components/App';
import 'styles.scss';

log.setLevel('info');

const history = sharedHistory(createHistory())
const store = createStore(initialState)
const rootElement = document.getElementById('root')

log.info('[redux] Gonna reset Navigator stack')
store.dispatch(resetStack(history.location))

const createApp = (AppComponent) => (
	<Provider store={store}>
		<Router history={history}>
			<AppComponent/>
		</Router>
	</Provider>
)

if (rootElement.hasChildNodes() === true) {
	log.info('[index] React Hydrate App')
	loadableReady(() => {
		log.info('[index][loadable] Ready')
		ReactDOM.hydrate(createApp(App), rootElement)
	})
	
} else {
	log.info('[index] React Render App')
  	ReactDOM.render(createApp(App), rootElement)
}

if (module.hot) {
	module.hot.accept(['components/App'], (files) => {
		log.info('[webpack] Webpack Hot Update')
		
		ReactDOM.unmountComponentAtNode(rootElement)
		ReactDOM.render(createApp(App), rootElement)
	});
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
