import React from 'react';
import Navigator from 'components/Navigator';
import {Route} from 'components/Navigator';
import log from 'loglevel';

import Home from 'pages/Home/async';
import Sample from 'pages/Sample/async';

export default (props) => {
	log.info('[App] render')

	return (
    	<>
      		<Navigator>
				<Route
					exact
					path='/sample/:id'
					component={Sample}
					/>
				<Route
					exact
					path='/sample'
					component={Sample}
					/>

				<Route
					exact
					path='/'
					component={Home}
					/>
			</Navigator>
    	</>
  	);
}
