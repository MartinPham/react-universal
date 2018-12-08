import {CHANGE_OBJECT_TEXT} from "../constants";

export default (text) => {
	return {
	    type: CHANGE_OBJECT_TEXT,
	    text
	}
}