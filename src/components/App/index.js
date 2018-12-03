import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Home from '../../pages/Home/async';
import About from '../../pages/About/async';

class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path="/about" component={About}/>

					
					<Route path="/" exact={true} component={Home}/>
				</Switch>
			</div>
		);
	}
}

export default App;
