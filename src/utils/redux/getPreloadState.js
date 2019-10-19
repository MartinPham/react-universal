import {getPlatform, PLATFORM_BROWSER} from "../platform";

export default (id, initialState) => 
    (getPlatform() === PLATFORM_BROWSER && global.__PRELOADED_STATE__ && global.__PRELOADED_STATE__[id]) ?
	global.__PRELOADED_STATE__[id]
        :
        initialState

