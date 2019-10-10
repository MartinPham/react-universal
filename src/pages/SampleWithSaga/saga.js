import { takeLatest } from 'redux-saga/effects';
import {INCREASE_COUNTER} from "./constants";
import increaseCounterSaga from "./sagas/increaseCounterSaga";

export default function*() {
    yield takeLatest(INCREASE_COUNTER, increaseCounterSaga);
}