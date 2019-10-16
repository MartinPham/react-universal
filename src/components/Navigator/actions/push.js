import {ACTION_PUSH} from "../constants";

export default (path, data = {}, transition = '', originPosition = {}) => {
	return {
	    type: ACTION_PUSH,
	    path,
		data,
		transition,
        originPosition
	}
}