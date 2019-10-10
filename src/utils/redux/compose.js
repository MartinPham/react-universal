import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/redux/injectReducer';
import injectSaga from 'utils/redux/injectSaga';

export default ({ID, mapState, mapDispatch, reducer, saga}) => {
	let functions = []

	if(mapState !== void 0 && mapDispatch !== void 0)
	{
		functions.push(connect(
			mapState,
			mapDispatch
		))
	}
	
	if(reducer !== void 0)
	{
		functions.push(injectReducer({ key: ID, reducer }))
	}
	
	if(saga !== void 0)
	{
		functions.push(injectSaga({ key: ID, saga }))
	}

	return compose(...functions)
}