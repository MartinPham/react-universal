import {CHANGE_TEXT} from "../constants";

export default (text) => {
	return {
	    type: CHANGE_TEXT,
	    text
	}
}