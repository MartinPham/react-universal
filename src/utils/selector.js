import { createSelector } from 'reselect';

const mainSelector = (ID, initialState) => key => rootState => (rootState[ID] || initialState).get(key);

const defaultCalculator = state => state;
// const defaultCalculator = state => {
// 	console.log('try to calculate');
// 	return state;
// };

export default
(key, calculator = null) =>
	(ID, initialState) =>
		createSelector(
			mainSelector(ID, initialState)(key),
			calculator !== null ? calculator :
				// defaultCalculator
				state => {
					console.log('>>> try to calculate ' + key + ' with state ' + state);
					return state;
				}
		);

