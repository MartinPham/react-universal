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
	let finalPath = (process.env.PUBLIC_URL || '') + path;

	finalPath += '?' + queryString.stringify(data);

	// console.log(currentPath, finalPath);

	if(currentPath !== finalPath)
	{
		yield history.push(finalPath, {
			transition,
			originPosition
		});
	}


}