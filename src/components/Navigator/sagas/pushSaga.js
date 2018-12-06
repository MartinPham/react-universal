import sharedHistory from 'utils/sharedHistory';
import platform, {PLATFORM_BROWSER, PLATFORM_NATIVE} from 'utils/platform';

export default function*({path}) {
	const history = sharedHistory().history;

	// console.log('env ', process.env);
	let finalPath = (process.env.PUBLIC_URL || '') + path;

	yield history.push(finalPath);
}