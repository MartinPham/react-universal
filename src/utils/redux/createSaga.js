import {all} from 'redux-saga/effects';

import appSaga  from 'components/App/saga';
import authProviderSaga  from 'components/AuthProvider/saga';
import navigatorSaga  from 'components/Navigator/saga';

export default function* () {
    console.log('saga run')
    yield all([
        appSaga(),
        authProviderSaga(),
        navigatorSaga()
    ])
}