import sharedHistory from 'utils/sharedHistory';

export default function*() {
    const history = sharedHistory().history;
	// history.action = 'GO_FORWARD';
    yield history.goForward();
}