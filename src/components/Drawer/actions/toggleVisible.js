import {ACTION_TOGGLE_VISIBLE} from "../constants";

export default (isVisible = null) => ({
    type: ACTION_TOGGLE_VISIBLE,
    isVisible
})