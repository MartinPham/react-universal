import { createSelector } from 'reselect';
import initialState from '../state';
import {ID} from "../constants";

const main = rootState => (rootState[ID] || initialState).toJS();

export default () => {
	console.log('try select');
	return createSelector(main, state => {
		console.log('try calculate with state', state);
		// return state.get('object').toJS();
		return state.object;
	});
}