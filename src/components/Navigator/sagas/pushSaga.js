import sharedHistory from 'utils/sharedHistory';

// import platform, {PLATFORM_BROWSER, PLATFORM_NATIVE} from 'utils/platform';

import {generateUrl} from 'utils/url';

export default function*({path, data, transition, originPosition}) {
	const history = sharedHistory().history;
	const location = history.location;

	let currentPath = location.pathname + location.search;

	if(currentPath === '/')
	{
		currentPath = '/?';
	}



	const finalPath = generateUrl(path, data);

	if(currentPath !== finalPath)
	{
		// history.action = 'PUSH';

		yield history.push(finalPath, {
			data,
			transition,
			originPosition
		});
	}


}