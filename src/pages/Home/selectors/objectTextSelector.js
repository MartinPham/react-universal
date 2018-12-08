import initialState from '../state';
import {ID} from "../constants";
import select from "utils/selector";

export default select('object', state => {
	console.log('!!!! hey let me calculate object text')
	return state.get('text');
})(ID, initialState);