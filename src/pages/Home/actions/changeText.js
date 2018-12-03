import {CHANGE_TEXT} from "../constants";

export default (text) => {
	console.log('home changetext created')
	return {
	    type: CHANGE_TEXT,
	    text
	}
}