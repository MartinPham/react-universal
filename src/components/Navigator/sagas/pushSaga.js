import sharedHistory from 'utils/sharedHistory';

export default function*({path}) {
	const history = sharedHistory().history;

	yield history.push(path);
}