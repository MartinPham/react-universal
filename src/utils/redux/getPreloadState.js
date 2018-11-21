import { fromJS } from 'immutable';
import platform, {PLATFORM_BROWSER} from "../platform";

export default (id, initialState) => fromJS(
    (platform === PLATFORM_BROWSER && window.__PRELOADED_STATE__ && window.__PRELOADED_STATE__[id]) ?
        window.__PRELOADED_STATE__[id]
        :
        initialState
    );
