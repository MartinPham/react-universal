import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/redux/injectReducer';
import injectSaga from 'utils/redux/injectSaga';
import { createStructuredSelector } from 'reselect';

export default ({ID, mapState, mapDispatch, reducer, saga}) => {
	let functions = []

	if(ID === void 0)
	{
		ID = 'Component-' + Math.floor(Math.random() * 1000000)
	}

	if(mapDispatch !== void 0)
	{
		if(mapState === void 0)
		{
			mapState = createStructuredSelector({

			});
		}
		
		
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