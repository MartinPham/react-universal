import { fromJS } from 'immutable';
import platform, {PLATFORM_BROWSER} from "../../utils/platform";
import {ID} from "./constants";

export default fromJS(
    (platform === PLATFORM_BROWSER && window.__PRELOADED_STATE__ && window.__PRELOADED_STATE__[ID]) ?
        window.__PRELOADED_STATE__[ID]
        :
        {
            text: "ciao",
            altText: "...",
        }
    );

// export default
// (platform === PLATFORM_BROWSER && window.__PRELOADED_STATE__ && window.__PRELOADED_STATE__[ID]) ?
//     window.__PRELOADED_STATE__[ID]
//     :
//     {
//         text: "ciao",
//         altText: "...",
//     };
