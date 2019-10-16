import React from 'react';
import Navigator from 'components/Navigator';
import {Route} from 'components/Navigator';
import log from 'loglevel';
import routes from 'config/routes';


export default (props) => {
	log.info('[App] render', props)

	return (
    	<>
      		<Navigator>
				{
					Object.keys(routes).map((routeId) => {
						const route = routes[routeId];
				
						return (
							<Route
								key={routeId}
								id={routeId}
								{...{
									...route,
									path: route.path
								}}
								initialData={props.pageInitialData}
							/>
						);
					})
				}
				
			</Navigator>
    	</>
  	);
}
