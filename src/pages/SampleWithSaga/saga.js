import {takeLatest, put} from 'redux-saga/effects';
import {INCREASE_COUNTER} from "./constants";
import changeAnotherCounter from './actions/changeAnotherCounter';

export default function*() {
	console.log('>>> gonna run saga')
    yield takeLatest(INCREASE_COUNTER, function*({plus}) {
		const data = yield (new Promise(resolve => setTimeout(() => resolve(plus * Math.random()), 1000)));
		console.log('okey saga will change another counter to ' + data)
		yield put(changeAnotherCounter(data));
	});
}