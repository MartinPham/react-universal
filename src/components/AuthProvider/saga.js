import { takeLatest, all } from 'redux-saga/effects';
import {UPDATE_USER, LOGOUT} from './constants';
import updateUserSaga from "./sagas/updateUserSaga";
import logoutSaga from "./sagas/logoutSaga";

export default function*() {
	console.log('run auth saga')
	yield all([
		takeLatest(UPDATE_USER, updateUserSaga),
		takeLatest(LOGOUT, logoutSaga)
	]);
}