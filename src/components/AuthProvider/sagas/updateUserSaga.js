import {all} from 'redux-saga/effects';
import storage from 'utils/storage';

export default function*({user, token}) {
    yield all([
        storage.edit('user', user),
        storage.edit('token', token)
    ]);
}