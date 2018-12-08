/*
import React from 'react'

import {render} from 'ink'
import App from 'components/App'

render(<App/>);
*/

/*
import React from 'react'
import { render } from 'ink'
import { Router, Switch, Route } from 'ink-router'

const HomeView = () => (<div>Home</div>)
const SettingsView = () => (<div>Settings</div>)
const NotFoundView = () => (<div>Not found</div>)


render(
  <Router>
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/settings" component={SettingsView} />
      <Route path="/" component={NotFoundView} />
    </Switch>
  </Router>
)
*/


import React from 'react';
import { Provider } from 'react-redux';

import { Router } from 'components/Router.cli';

import {render} from 'ink';

import createHistory from 'history/createMemoryHistory';
import sharedHistory from 'utils/sharedHistory';


import storage from 'utils/storage';
import queryString from 'query-string';

import App from 'components/App';


import updateUser from "components/AuthProvider/actions/updateUser";
import historyChanged from "components/App/actions/historyChanged";
import resetHistory from "components/App/actions/resetHistory";

import configureStore from 'utils/redux/configureStore';


let argv = process.argv.slice(2);

let queryParams = {};

for(let i = 0; i < argv.length; i++)
{
	const argvI = argv[i];
	if(argvI.substr(0, 2) ==='--')
	{
		const splited = argvI.split('=');
		queryParams[splited[0].slice(2)] = splited.slice(1).join('=');

		delete argv[i];
	}
}

argv = argv.filter(() => true);

let initialSearch = queryString.stringify(queryParams);

let initialUrl = '/' + argv.join('/') + (initialSearch.length > 0 ? ('?' + initialSearch) : '');

const historyWrapper = sharedHistory(createHistory({
	initialEntries: [initialUrl]
}));
const store = configureStore({});

historyWrapper.history.listen(location => {
    store.dispatch(historyChanged(location));
});

global.store = store; // dirty tricks, seems Provider context doesnt work here in ink

const historyResetter = () => {
	// console.log('reset')
    store.dispatch(resetHistory({
        ...historyWrapper.history.location,
        transition: 'slideLeft'
    }));
};

const authPreload = () => {
    const localUser = storage.read('user');
    const localToken = storage.read('token');

    // console.log(localUser, localToken);

    store.dispatch(updateUser(localUser, localToken));
};

// console.log(historyWrapper.history.location);

historyResetter();
authPreload();

render (
    <Provider store={store}>
		<Router history={historyWrapper.history}>
				<App/>
		</Router>
    </Provider>
);




/*
import React from 'react';
import {render} from 'ink';
import { Provider } from 'react-redux';
import { CommandLineRouter as Router } from 'react-router';
import createHistory from 'history/createMemoryHistory';
import sharedHistory from 'utils/sharedHistory';
// import { Frontload } from 'react-frontload';
// import 'utils/reactotron';


import App from 'components/App';
// import log from 'utils/log';


import configureStore from 'utils/redux/configureStore';
import historyChanged from "components/App/actions/historyChanged";
import resetHistory from "components/App/actions/resetHistory";
import storage from "utils/storage";
import updateUser from "components/AuthProvider/actions/updateUser";


const historyWrapper = sharedHistory(createHistory());
const store = configureStore({});

historyWrapper.history.listen(location => {
    store.dispatch(historyChanged(location));
});

const historyResetter = () => {
    store.dispatch(resetHistory({
        ...historyWrapper.history.location,
        transition: 'slideLeft'
    }));
};

const authPreload = async () => {
    const localUser = await storage.read('user');
    const localToken = await storage.read('token');

	// console.log(localUser, localToken);

    store.dispatch(updateUser(localUser, localToken));
};


historyResetter();
authPreload();


render (
	<Provider store={store}>
		<Router history={historyWrapper.history}>
				<App/>
		</Router>
	</Provider>
);
*/
