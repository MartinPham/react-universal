import {INCREASE_COUNTER} from "../constants";

export default (plus = 1) => {
	return {
		type: INCREASE_COUNTER,
		plus
	}
}