import queryString from 'query-string';
import routes from 'config/routes';

export const generateUrl = (path, data = {}) => {
	console.log(path, data)
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

	return finalPath
}