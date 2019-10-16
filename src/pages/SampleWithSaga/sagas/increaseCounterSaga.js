import { put } from 'redux-saga/effects';
import changeAnotherCounter from "../actions/changeAnotherCounter";

export default function*({plus}) {
	const data = yield (new Promise(resolve => setTimeout(() => resolve(plus * Math.random()), 1000)));
	console.log('okey saga will change another counter to ' + data)
    yield put(changeAnotherCounter(data));
}