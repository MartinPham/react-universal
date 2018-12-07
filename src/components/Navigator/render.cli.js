import React from 'react';
import AuthProvider from "components/AuthProvider";


export const componentDidMount = ($this, $props, $state, $routes, ...$extra) => {

}

export const componentWillUnmount = ($this, $props, $state, $routes, ...$extra) => {
	
}

export default ($this, $props, $state, $routes, ...$extra) => {
	let argv = process.argv.slice(2);

	let queryParams = {};

	for(let i = 0; i < argv.length; i++)
	{
		const argvI = argv[i];
		if(argvI.substr(0, 2) ==='--')
		{
			const splited = argvI.split('=');
			queryParams[splited[0].slice(2)] = splited.slice(1).join('=');

			delete argv[i];
		}
	}

	argv = argv.filter(() => true);

	// console.log(process.argv, argv, queryParams)

	if(argv.length === 0)
	{
		argv = [''];
	}

	// console.log('>>> argv', argv);

	let matchedRoute = null;

	for(let i = 0; i < $props.children.length; i++) 
	{
		const route = $props.children[i];
		const childProps = route.props;

		const path = childProps.path;


		// console.log('>>> child', child);
		/*
		
		const pathParams = [];

		const pathArgv = path.slice(1).split('/').map(item => {
			if(item[0] ===':')
			{
				// variable
				pathParams.push(item);
				return '([^\/])*';
			}
			return item;
		});

		const pathRegExp = new RegExp(pathArgv.join(' '));
		*/
	
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
				matchedRoute.props.match = {
					params: routeParams,
					isExact: route.exact,
					path: path,
					url: argv.join('/')
				};
				matchedRoute.props.queryParams = queryParams;
				// console.log('all match', matchedRoute);
				break;
			}
		}



	}

    return (
    	<AuthProvider>
    		{matchedRoute}
    	</AuthProvider>
    );
}