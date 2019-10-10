import initialState from '../state';
import {ID} from "../constants";
import select from "utils/select";

export default select('altText', null, state => {
	return state + ' - ' + (new Date())
})(ID, initialState);