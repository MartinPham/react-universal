
import { takeLatest, put } from 'redux-saga/effects';
import { changeAltText } from './test';

  function* testSaga(action) {
    console.log('testSaga', action);
    const data = yield (new Promise(resolve => setTimeout(() => resolve('ok async saga'), 1000)));
    console.log('testSaga >>> ', data);
    yield put(changeAltText(action.text + ' & ' + data));
  }
  

  export default function* rootSaga() {
  	console.log('rootSaga');
    yield takeLatest("CHANGE_TEXT", testSaga);
  }