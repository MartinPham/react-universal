import React from 'react';

import routes from 'config/routes';
import Navigator from "../Navigator";

class App extends React.Component {
	render() {
		return (<Navigator routes={routes} />);
	}
}

export default App;
