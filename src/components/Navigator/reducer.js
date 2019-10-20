import initialState from './state';
import getPreloadState from 'utils/redux/getPreloadState';
import {ID, ACTION_PUSH, ACTION_RESET_STACK, ACTION_UPDATE_STACK} from './constants';
import produce from 'immer';
import log from 'loglevel';
import {matchPath} from 'react-router';
import routes from 'config/routes';
import sharedHistory from 'utils/sharedHistory';

const preloadedInitialState = getPreloadState(ID, initialState)
const routeKeys = Object.keys(routes)

const computeMatch = (pathname) => {
	const basename = sharedHistory().basename

	for(let routeId of routeKeys)
	{
		const route = routes[routeId]
		const match = matchPath(pathname, basename + route.path)

		if(match !== null)
		{
			log.info('[Navigator][computeMatch] matched', routeId, match)

			return {
				id: routeId,
				params: {...match.params}
			}
		}
	}

	return null
}

export default (state = preloadedInitialState, action) => {
    switch(action.type) {
        case ACTION_PUSH:
            return produce(state, draftState => {
				const {transition, originalPosition} = action
				global.navigatorTransition = draftState.transition = transition || 'none'
				draftState.originalPosition = originalPosition || {}
				log.info('[Navigator][reducer] push', transition)
			})
        case ACTION_RESET_STACK:
			return produce(state, draftState => {
				const location = {...action.location}
				location.key = location.key || ''
				draftState.stack = [location]
				draftState.location = location
				draftState.route = computeMatch(draftState.location.pathname)
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

				

				draftState.route = computeMatch(draftState.location.pathname)

				global.navigatorTransition = draftState.transition || 'none'
			})
        default:
            return state
    }
}