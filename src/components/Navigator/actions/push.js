import {PUSH} from "../constants";

export default (path, data = {}, transition = '', originPosition = {}) => {
	return {
	    type: PUSH,
	    path,
		data,
		transition,
        originPosition
	}
}