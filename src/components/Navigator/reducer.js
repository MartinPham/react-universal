import initialState from './state';
import getPreloadState from 'utils/redux/getPreloadState';
import {ID, ACTION_PUSH, ACTION_RESET_STACK, ACTION_UPDATE_STACK} from './constants';
import produce from 'immer';

const preloadedInitialState = getPreloadState(ID, initialState)

export default (state = preloadedInitialState, action) => {
    switch(action.type) {
		case 'SET_INITIAL_DATA':
			return produce(state, draftState => {
				console.log('SET_INITIAL_DATA', action.data)
				draftState.pageInitialData = 'xxx'
			})
        case ACTION_PUSH:
            return produce(state, draftState => {
				const {transition, originalPosition} = action
				draftState.transition = transition || state.transition
				draftState.originalPosition = originalPosition || {}
			})
        case ACTION_RESET_STACK:
			return produce(state, draftState => {
				const location = {...action.location}
				location.key = location.key || ''
				draftState.stack = [location]
				draftState.location = location
			})
        case ACTION_UPDATE_STACK:
            return produce(state, draftState => {
				const location = {...action.location}
				location.key = location.key || ''

				draftState.location = location

				const currentStack = state.stack
				const currentLocation = state.location
				const currentTransition = state.transition
				const currentOriginPosition = state.originPosition
	
				const currentLocationIndex = currentStack.findIndex(stackItem => currentLocation.key === stackItem.key)
				const existedLocationIndex = currentStack.findIndex(stackItem => draftState.location.key === stackItem.key)

				if(existedLocationIndex === -1)
				{
					draftState.stack = currentStack.slice(0, currentLocationIndex + 1)
			
			
					draftState.location.transition = currentTransition
					draftState.location.originPosition = currentOriginPosition
			
			
					draftState.stack.push(draftState.location);
			
			
					draftState.direction = 'forward'
				} else {
					if(existedLocationIndex < currentLocationIndex)
					{
						draftState.direction = 'back'
			
						const nextOfExistedLocation = currentStack[existedLocationIndex + 1]
			
						draftState.transition = nextOfExistedLocation.transition
						draftState.originPosition = nextOfExistedLocation.originPosition
			
					} else {
						draftState.direction = 'forward';
			
			
						const existedLocation = currentStack[existedLocationIndex]
			
						draftState.transition = existedLocation.transition
						draftState.originPosition = existedLocation.originPosition
			
					}
			
				}
			})
        default:
            return state
    }
}