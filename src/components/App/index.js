import { Component } from 'react';

import routes from 'config/routes';
import render from './render';

class App extends Component {
	render() {
		return render(this, this.props, this.state, routes);
	}
}

export default App;
