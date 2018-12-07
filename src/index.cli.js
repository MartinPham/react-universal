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

import {render} from 'ink';
import storage from 'utils/storage';

import App from 'components/App';


import updateUser from "components/AuthProvider/actions/updateUser";

import configureStore from 'utils/redux/configureStore';
const store = configureStore({});

global.store = store; // dirty tricks, seems Provider context doesnt work here in ink

const authPreload = () => {
    const localUser = storage.read('user');
    const localToken = storage.read('token');

    // console.log(localUser, localToken);

    store.dispatch(updateUser(localUser, localToken));
};


authPreload();

render (
    <Provider store={store}>
        <App/>
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
