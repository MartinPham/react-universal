import { takeLatest, all } from 'redux-saga/effects';
import {GO, GO_BACK, GO_FORWARD, PUSH} from './constants';
import pushSaga from './sagas/pushSaga';
import goSaga from "./sagas/goSaga";
import goBackSaga from "./sagas/goBackSaga";
import goForwardSaga from "./sagas/goForwardSaga";

export default function*() {
	yield all([
		takeLatest(PUSH, pushSaga),
		takeLatest(GO, goSaga),
		takeLatest(GO_BACK, goBackSaga),
		takeLatest(GO_FORWARD, goForwardSaga),
	]);
}