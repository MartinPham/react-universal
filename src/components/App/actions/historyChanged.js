import {HISTORY_CHANGED} from "../constants";

export default (location) => ({
    type: HISTORY_CHANGED,
    location
})