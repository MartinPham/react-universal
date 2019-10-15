
import {createSelector} from 'reselect';


const defaultSelector = (mainState, key) => {
	return mainState[key];
};

const mainSelector = (ID, initialState) => (key, selector = null) => rootState => {
	const state = (rootState && rootState[ID]) || initialState;

	return selector !== null ? selector(state, key) :
		defaultSelector(state, key)
	;
};

const defaultCalculator = state => {
	return state
}

export default
(key, selector = null, calculator = null) =>
	(ID, initialState) =>
		createSelector(
			mainSelector(ID, initialState)(key, selector),
			calculator !== null ? calculator :
				defaultCalculator
		);

