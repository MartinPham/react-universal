import sharedHistory from 'utils/sharedHistory';
import queryString from 'query-string';
// import platform, {PLATFORM_BROWSER, PLATFORM_NATIVE} from 'utils/platform';

import routes from 'config/routes';

export default function*({path, data, transition, originPosition}) {
	const history = sharedHistory().history;
	const location = history.location;

	let currentPath = location.pathname + location.search;

	if(currentPath === '/')
	{
		currentPath = '/?';
	}



	// console.log('env ', process.env);
	let finalPath = path;
	let finalPathQueryData = {};

	const questionPostion = finalPath.indexOf('?');

	if(questionPostion > -1)
	{
		const finalPathQuery = finalPath.substr(questionPostion)
		if(finalPathQuery)
		{
			finalPathQueryData = queryString.parse(finalPathQuery)
		}

		finalPath = finalPath.substr(0, questionPostion)	
	}	

	if(finalPath[0] === '@')
	{
		const routeId = finalPath.substr(1)
		
		console.log(finalPath, routeId, routes[routeId])
		if(routes[routeId] !== void 0)
		{
			finalPath = routes[routeId].path
		}
	}

	finalPath = (process.env.PUBLIC_URL || '') + finalPath;

	finalPath += '?' + queryString.stringify({
		...finalPathQueryData,
		...data
	});

	// console.log(currentPath, finalPath);

	if(currentPath !== finalPath)
	{
		// history.action = 'PUSH';

		yield history.push(finalPath, {
			transition,
			originPosition
		});
	}


}