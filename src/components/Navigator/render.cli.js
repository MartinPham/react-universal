import React from 'react';
import AuthProvider from "components/AuthProvider";
import sharedHistory from "utils/sharedHistory";



export const componentDidMount = ($this, $props, $state, $routes, ...$extra) => {

};

export const componentWillUnmount = ($this, $props, $state, $routes, ...$extra) => {

};

export default ($this, $props, $state, $routes, ...$extra) => {
	let history = $this.context.history;

	if(typeof history === 'undefined')
	{
		history = sharedHistory().history;
	}


	let matchedRoute = null;

	// if(history.location.pathname ==='/about')
	// {
	// 	// console.log('xxx')
	// }


	const argv = history.location.pathname.split('/').slice(1);

	for(let i = 0; i < $props.children.length; i++)
	{
		const route = $props.children[i];
		const childProps = route.props;

		const path = childProps.path;

		let routeParams = {};

		const pathArgv = path.slice(1).split('/');

		// console.log(
		// 	argv,
		// 	pathArgv
		// );

		if(pathArgv.length === argv.length)
		{
			let matched = true;

			for(let j = 0; j < pathArgv.length; j++)
			{
				const argvJ = argv[j];
				const pathArgvJ = pathArgv[j];

				// console.log('compare', pathArgvJ, argvJ);

				if(pathArgvJ[0] ===':')
				{
					// variable
					// console.log('var', pathArgvJ);
					routeParams[pathArgvJ.slice(1)] = argvJ;
				} else if (pathArgvJ !== argvJ) {
					// console.log('not match anymore');
					matched = false;
					break;
				}
			}

			if(matched)
			{
				matchedRoute = route;



				// matchedRoute.props.match = {
				// 	params: routeParams,
				// 	isExact: route.exact,
				// 	path: path,
				// 	url: argv.join('/')
				// };

				// console.log('all match', matchedRoute);
				break;
			}
		}
	}

	if(matchedRoute)
	{
		// matchedRoute.props.history = history;
		const matchedRouteProps = {
			...matchedRoute.props,
			location: history.location
		};

		// matchedRoute.props = matchedRouteProps;

	}

	return (
		<AuthProvider>
			{matchedRoute}
		</AuthProvider>
	);
}