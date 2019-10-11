import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/redux/injectReducer';
import injectSaga from 'utils/redux/injectSaga';
import { createStructuredSelector } from 'reselect';

import { frontloadConnect } from "react-frontload";

export default ({ID, mapState, mapDispatch, reducer, saga, frontload}) => {
	let functions = []

	if(ID === void 0)
	{
		ID = 'Component-' + Math.floor(Math.random() * 1000000)
	}

	if(mapState === void 0)
	{
		mapState = {}
	}
	mapState = createStructuredSelector(mapState);

	if(mapDispatch === void 0)
	{
		mapDispatch = dispatch => ({
			dispatch: (call) => dispatch(call)
		});
	}		
	
	

	functions.push(connect(
		mapState,
		mapDispatch
	))
	
	if(reducer !== void 0)
	{
		functions.push(injectReducer({ key: ID, reducer }))
	}
	
	if(saga !== void 0)
	{
		functions.push(injectSaga({ key: ID, saga }))
	}

	const composed = compose(...functions)

	if(frontload !== void 0)
	{
		return (component) => composed(frontloadConnect(frontload, {
			onMount: true,
			onUpdate: false
		})(component))
	}
	return composed
}