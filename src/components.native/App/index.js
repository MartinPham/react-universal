import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Home from '../../pages.native/Home';
import About from '../../pages.native/About';


class App extends Component {
	render() {
		return (
				<Switch>
					<Route path="/about" component={About}/>

					
					<Route path="/" exact={true} component={Home}/>
				</Switch>
		);
	}
}

export default App;
