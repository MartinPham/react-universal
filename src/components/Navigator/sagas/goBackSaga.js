import sharedHistory from 'utils/sharedHistory';

export default function*() {
    const history = sharedHistory().history;
	// history.action = 'GO_BACK';
    yield history.goBack();
}