import initialState from '../state';
import {ID} from "../constants";
import select from "utils/select";

export default select('text', null, text => {
	console.log('making upper case...')
	return text.toUpperCase()
})(ID, initialState);