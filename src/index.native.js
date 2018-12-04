import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createHistory from 'history/createMemoryHistory';

import App from './components.native/App';
import log from './utils/log';


import configureStore from './utils/redux/configureStore';


const history = createHistory();
const store = configureStore({});


export default class AppComponent extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={history}>
					<App/>
				</Router>
			</Provider>
		);
	}
}
