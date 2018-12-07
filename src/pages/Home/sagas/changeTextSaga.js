import { put } from 'redux-saga/effects';
import changeAltText from "../actions/changeAltText";

export default function*({text}) {
    yield put(changeAltText('...'));

    const data = yield (new Promise(resolve => setTimeout(() => resolve('changed from saga'), 2000)));
    yield put(changeAltText(text + ' - ' + data));
}