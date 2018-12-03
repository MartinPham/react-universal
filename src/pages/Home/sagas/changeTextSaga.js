import { put } from 'redux-saga/effects';
import changeAltText from "../actions/changeAltText";

export default function*({text}) {
    const data = yield (new Promise(resolve => setTimeout(() => resolve('saga loaded'), 3000)));
    yield put(changeAltText(text + ' & ' + data));
}