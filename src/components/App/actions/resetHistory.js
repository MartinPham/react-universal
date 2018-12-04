import {RESET_HISTORY} from "../constants";

export default (location) => ({
    type: RESET_HISTORY,
    location
})