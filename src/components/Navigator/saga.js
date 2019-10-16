import {takeLatest, all} from 'redux-saga/effects';
import {ACTION_GO, ACTION_GO_BACK, ACTION_GO_FORWARD, ACTION_PUSH} from './constants';
import sharedHistory from 'utils/sharedHistory';
import {generateUrl} from 'utils/url';
import log from 'loglevel';


export default function*() {
	yield all([
		takeLatest(ACTION_GO, function*({steps}) {
			const history = sharedHistory();
			yield history.go(steps);
		}),
		takeLatest(ACTION_GO_BACK, function*() {
			const history = sharedHistory();
			yield history.goBack();
		}),
		takeLatest(ACTION_GO_FORWARD, function*() {
			const history = sharedHistory();
			yield history.goForward();
		}),
		takeLatest(ACTION_PUSH, function*({path, data, transition, originPosition}) {
			log.info('[Navigator][saga] push', path)
			const history = sharedHistory();
		


			const finalPath = generateUrl(path, data);


			yield history.push(finalPath, {
				data,
				transition,
				originPosition
			});
		}),
	])
}