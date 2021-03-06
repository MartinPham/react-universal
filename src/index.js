import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import * as serviceWorker from 'serviceWorker';
import {Router} from 'react-router';
import {loadableReady} from '@loadable/component';
import {createBrowserHistory as createHistory} from 'history';
import sharedHistory from 'utils/sharedHistory';
import store from 'utils/redux/store';
import resetStack from 'components/Navigator/actions/resetStack';
import log from 'loglevel';

import App from 'components/App';
import 'styles.scss';

if(process.env.NODE_ENV === 'production')
{
	log.setLevel('warn');
}


const reduxStore = store()
const history = sharedHistory(createHistory())

const basename = process.env.PUBLIC_URL
history.basename = basename

log.info('[index] React Client App. Basename = ' + history.basename)


if(reduxStore.getState().Navigator && reduxStore.getState().Navigator.stack && reduxStore.getState().Navigator.stack.length > 0)
{
	log.info('[redux] Navigator stack already filled')
} else {
	log.info('[redux] Gonna reset Navigator stack', history.location)
	reduxStore.dispatch(resetStack(history.location))
}

const rootElement = document.getElementById('root')


const createApp = (AppComponent) => (
	<Provider store={reduxStore}>
		<Router basename={basename} history={history}>
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
