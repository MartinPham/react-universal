import sharedHistory from 'utils/sharedHistory';
import queryString from 'query-string';
// import platform, {PLATFORM_BROWSER, PLATFORM_NATIVE} from 'utils/platform';

export default function*({path, data}) {
	const history = sharedHistory().history;

	// console.log('env ', process.env);
	let finalPath = (process.env.PUBLIC_URL || '') + path;

	finalPath += '?' + queryString.stringify(data);


	yield history.push(finalPath);
}