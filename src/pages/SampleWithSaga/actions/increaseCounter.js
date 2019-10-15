import {INCREASE_COUNTER} from "../constants";

export default (plus = 1) => {
	console.log('create action INCREASE_COUNTER')
	return {
		type: INCREASE_COUNTER,
		plus
	}
}