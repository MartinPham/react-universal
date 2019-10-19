import initialState from './state';
import {ID, INCREASE_COUNTER} from './constants';
import getPreloadState from 'utils/redux/getPreloadState';
import {produce} from 'immer';

const preloadedInitialState = getPreloadState(ID, initialState);

export default (state = preloadedInitialState, action) => {
    switch(action.type) {
        case INCREASE_COUNTER:
            return produce(state, draftState => {
				draftState.counter++
			})
        default:
            return state;
    }
}