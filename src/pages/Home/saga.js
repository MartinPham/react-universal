import { takeLatest } from 'redux-saga/effects';
import {CHANGE_TEXT} from "./constants";
import changeTextSaga from "./sagas/changeTextSaga";

export default function*() {
    yield takeLatest(CHANGE_TEXT, changeTextSaga);
}