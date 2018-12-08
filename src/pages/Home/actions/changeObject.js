import {CHANGE_OBJECT} from "../constants";

export default (object) => {
	return {
	    type: CHANGE_OBJECT,
	    object
	}
}