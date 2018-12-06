import {all, put} from 'redux-saga/effects';
import storage from "utils/storage";
import push from "components/Navigator/actions/push";
import sharedHistory from "../../../utils/sharedHistory";

export default function*() {
    yield all([
        storage.delete('user'),
        storage.delete('token'),
        put(push(sharedHistory().history.location.pathname, {}, 'flyDown'))
    ]);
}