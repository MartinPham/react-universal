import React from 'react';

import Route from 'components/Route';
import Navigator from "components/Navigator";

import routes from 'config/routes';


export default ($this, $props, $state, ...$extra) => {
	return (
		<Navigator>
			{
				Object.keys(routes).map((routeId) => {
					const route = routes[routeId];


					const pathPrefix = (process.env.PUBLIC_URL || '');


					return (
						<Route
							key={routeId}
							id={routeId}
							{...{
								...route,
								path: pathPrefix + route.path
							}}
						/>
					);
				})
			}

		</Navigator>
	);
}