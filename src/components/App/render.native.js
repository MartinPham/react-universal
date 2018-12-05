// export default from './render.js'; // add .js to avoid loop


import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import sharedHistory from 'utils/sharedHistory';
import { NavigationActions } from 'react-navigation';

import Navigator from 'components/Navigator';

export default ($this, $props, $state, $routes, ...$extra) => {
	const navigatorRoutes = {
	};

	Object.keys($routes).forEach((routeId) => {
        const route = $routes[routeId];

        navigatorRoutes[routeId] = {
        	screen: route.source
        };
    })


	const AppNavigator = createStackNavigator(
		navigatorRoutes,
		{
			initialRouteName: "Home"
		}
	);
	const AppContainer = createAppContainer(AppNavigator);

	// setTimeout(() => {
	// 	const historyWrapper = sharedHistory();
	// 	historyWrapper.history.push('About')
	// }, 3000);
	// setTimeout(() => {
	// 	const historyWrapper = sharedHistory();
	// 	historyWrapper.history.goBack();
	// }, 6000);

	return (
		<Navigator>
			<AppContainer
					ref={nav => {

						let history = {};
						history.navigator = nav;
						history.routes = $routes;

						history.push = (path) => {
							let routeId = 'Home';

							for(let id in history.routes)
							{
								if(history.routes[id].path === path)
								{
									routeId = id;
									break;
								}
							};


							const navigateAction = NavigationActions.navigate({
								routeName: routeId
							});

							history.navigator.dispatch(navigateAction);
						};

						history.goBack = () => {
							const navigateAction = NavigationActions.back();
	
							history.navigator.dispatch(navigateAction);
						};

						history.goForward = () => {
							
						};

						history.go = () => {
							
						};


			        	const historyWrapper = sharedHistory(history);
			        }}
				/>
		</Navigator>
	);
}