import initialState from '../state';
import {ID} from "../constants";
import select from "utils/select";

// export default select(
// 	'object',
// 	(mainState, key) => {
// 		console.log('!!!! HEYYYY let me select object.text');
// 		return mainState.getIn([key, 'text']);
// 	},
// 	state => {
// 		console.log('!!!! hey let me calculate object text');
//
// 		let result = state;
//
// 		for(let i = 0; i < 100000; i++)
// 		{
// 			result += i + ' ';
// 		}
//
// 		return result;
// 	}
// )(ID, initialState);

export default select(['object', 'text'])(ID, initialState);