import initialState from './state';
import getPreloadState from 'utils/redux/getPreloadState';
import {ID, ACTION_TOGGLE_VISIBLE} from './constants';
import produce from 'immer';

const preloadedInitialState = getPreloadState(ID, initialState)

export default (state = preloadedInitialState, action) => {
    switch(action.type) {
        case ACTION_TOGGLE_VISIBLE:
            return produce(state, draftState => {
				let {isVisible} = action
				if(isVisible === null)
				{
					isVisible = !state.isVisible
				}

				draftState.isVisible = isVisible
			})
        default:
            return state
    }
}