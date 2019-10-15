import {INCREASE_COUNTER} from "../constants";

export default (plus = 1) => ({
	type: INCREASE_COUNTER,
	plus
})