import {all} from 'redux-saga/effects';

import sagas from 'config/sagas';

export default function* () {
    yield all(sagas.map(saga => saga()))
}