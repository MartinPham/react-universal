import sharedHistory from 'utils/sharedHistory';

export default function*({index}) {
    const history = sharedHistory().history;
	// history.action = 'GO';
    yield history.go(index);
}