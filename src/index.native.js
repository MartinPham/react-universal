import React, {Component} from 'react';
import { Provider } from 'react-redux';
// import { Router } from 'react-router';
// import createHistory from 'history/createMemoryHistory';
// import sharedHistory from 'utils/sharedHistory';
import { Frontload } from 'react-frontload';

import App from 'components/App';
// import log from 'utils/log';


import configureStore from 'utils/redux/configureStore';
// import historyChanged from "./components/App/actions/historyChanged";
// import resetHistory from "./components/App/actions/resetHistory";


// const historyWrapper = sharedHistory(createHistory());
const store = configureStore({});

// historyWrapper.history.listen(location => {
//     store.dispatch(historyChanged(location));
// });
// 
// const historyResetter = () => {
//     store.dispatch(resetHistory({
//         ...historyWrapper.history.location,
//         transition: 'slideLeft'
//     }));
// };


export default class AppComponent extends Component {
// 	componentDidMount()
// 	{
// 
//         historyResetter();
// 	}

	render() {
		return (
			<Provider store={store}>
				{/* <Router history={historyWrapper.history}> */}
                    <Frontload noServerRender={true} isServer={false}>
						<App/>
					</Frontload>
				{/* </Router> */}
			</Provider>
		);
	}
}
