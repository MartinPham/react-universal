import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createHistory from 'history/createMemoryHistory';
import sharedHistory from 'utils/sharedHistory';
import { Frontload } from 'react-frontload';
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
authPreload().then(() => {
	console.log('auth data synced')
});


export default class AppComponent extends Component {
	componentDidMount()
	{

        // historyResetter();
	}

	render() {
		return (
			<Provider store={store}>
				<Router history={historyWrapper.history}>
                    <Frontload noServerRender={true} isServer={false}>
						<App/>
					</Frontload>
				</Router>
			</Provider>
		);
	}
}
