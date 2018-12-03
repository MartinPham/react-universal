import initialState from './state';

import { ID, PUSH } from './constants';
import pushReducer from './reducers/pushReducer';

import getPreloadState from "utils/redux/getPreloadState";

const preloadedInitialState = getPreloadState(ID, initialState);

export default function reducer(state = preloadedInitialState, action) {
	switch (action.type) {
		case PUSH:
			return pushReducer(state, action);
		default:
			return state;
	}
}
