import { createSelector } from 'reselect';

const defaultSelector = (mainState, key) => {
	if(typeof key === 'string')
	{
		return mainState.get(key);
	}else if(typeof key === 'object')
	{
		return mainState.getIn(key);
	}
	return mainState;
};

const mainSelector = (ID, initialState) => (key, selector = null) => rootState => {
	const state = rootState[ID] || initialState;

	return selector !== null ? selector(state, key) :
		defaultSelector(state, key)
	;
};

const defaultCalculator = state => state;

export default
(key, selector = null, calculator = null) =>
	(ID, initialState) =>
		createSelector(
			mainSelector(ID, initialState)(key, selector),
			calculator !== null ? calculator :
				// defaultCalculator
				state => {
					console.log('>>> try to calculate ' + key + ' with state ' + state);
					return state;
				}
		);

