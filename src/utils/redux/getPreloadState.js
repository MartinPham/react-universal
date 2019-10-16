import {getPlatform, PLATFORM_BROWSER} from "../platform";

export default (id, initialState) => 
    (getPlatform() === PLATFORM_BROWSER && window.__PRELOADED_STATE__ && window.__PRELOADED_STATE__[id]) ?
        window.__PRELOADED_STATE__[id]
        :
        initialState

