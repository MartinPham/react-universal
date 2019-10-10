import sharedHistory from 'utils/sharedHistory';
import queryString from 'query-string';
// import platform, {PLATFORM_BROWSER, PLATFORM_NATIVE} from 'utils/platform';

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
	if(finalPath && finalPath[0] === '@')
	{
		
	}
	finalPath = (process.env.PUBLIC_URL || '') + finalPath;

	finalPath += '?' + queryString.stringify(data);

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