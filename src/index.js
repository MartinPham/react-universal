import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { Frontload } from 'react-frontload';
import Loadable from 'react-loadable';
import createHistory from 'history/createBrowserHistory';
import sharedHistory from 'utils/sharedHistory';


// import * as serviceWorker from './serviceWorker';

import App from 'components/App';
import AuthProvider from 'components/AuthProvider';
import historyChanged from 'components/App/actions/historyChanged';
import resetHistory from 'components/App/actions/resetHistory';
import log from 'utils/log';
import storage from 'utils/storage';


import configureStore from 'utils/redux/configureStore';

import 'styles.scss';
import updateUser from "components/AuthProvider/actions/updateUser";

const historyWrapper = sharedHistory(createHistory());
const store = configureStore({});
const rootElement = document.getElementById('root');

historyWrapper.history.listen(location => {
	store.dispatch(historyChanged(location));
});

const historyResetter = () => {
	store.dispatch(resetHistory({
		...historyWrapper.history.location,
		transition: 'slideLeft'
	}));
};

const authPreload = () => {
    const localUser = storage.read('user');
    const localToken = storage.read('token');


    store.dispatch(updateUser(localUser, localToken));
};


const createApp = (AppComponent) => (
	<div id='app'>
		<Provider store={store}>
            <AuthProvider>
				<Router history={historyWrapper.history}>
					<Frontload noServerRender={true}>
						<AppComponent/>
					</Frontload>
				</Router>
            </AuthProvider>
		</Provider>
	</div>
);


authPreload();
historyResetter();


if (rootElement.hasChildNodes() === true) {
	log.warn('React Hydrate App from SSR');
  	Loadable.preloadReady().then(() => {
    	ReactDOM.hydrate(createApp(App), rootElement);
    	// historyResetter();
        // authPreload();
  	});
} else {
	log.warn('React Render App');
  	ReactDOM.render(createApp(App), rootElement);
    // historyResetter();
    // authPreload();
}

if (module.hot) {
	module.hot.accept(['components/App'], (files) => {
		log.group('Webpack Hot Update', () => {
			files.forEach(file => log.warn('-> ' + file));
		});
		
		ReactDOM.unmountComponentAtNode(rootElement);
		ReactDOM.render(createApp(App), rootElement);
	});
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();