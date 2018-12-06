import sharedHistory from 'utils/sharedHistory';

export default function*({index}) {
    const history = sharedHistory().history;

    yield history.go(index);
}