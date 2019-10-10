import initialState from '../state';
import {ID} from "../constants";
import select from "utils/select";

export default select('counter', null, counter => {
	console.log('making funny..')
	return `[-- ${counter} --]`
})(ID, initialState);