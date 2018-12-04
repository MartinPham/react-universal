import sharedHistory from 'utils/sharedHistory';

export default function*({path}) {
	const history = sharedHistory().history;

	history.push(path);
}