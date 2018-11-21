import {ID} from './constants';
import initialState from './state';
import getPreloadState from "./utils/redux/getPreloadState";

const preloadedInitialState = getPreloadState(ID, initialState);

export default (state = preloadedInitialState, action) => state