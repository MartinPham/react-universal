import getPreloadState from 'utils/redux/getPreloadState';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import select from 'utils/select';

export default (ID, stateKeys = [], initialState = {}) => {
	const selectors = {}

	const preloadedInitialState = getPreloadState(ID, initialState)

	for(let stateKey of stateKeys)
	{
		selectors[stateKey] = select(stateKey)(ID, preloadedInitialState)
	}

	const mapState = createStructuredSelector(selectors)
	
	return connect(
		mapState
	)
}