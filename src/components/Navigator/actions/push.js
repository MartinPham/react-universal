import {PUSH} from "../constants";

export default (path, data = {}, transition = '') => {
	return {
	    type: PUSH,
	    path,
		data,
		transition
	}
}