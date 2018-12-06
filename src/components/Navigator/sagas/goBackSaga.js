import sharedHistory from 'utils/sharedHistory';

export default function*() {
    const history = sharedHistory().history;

    yield history.goBack();
}