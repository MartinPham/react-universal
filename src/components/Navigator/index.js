import React from 'react';


import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/redux/injectReducer';
import injectSaga from 'utils/redux/injectSaga';
// import log from 'utils/log';


import reducer from './reducer';
import saga from './saga';
import goBack from './actions/goBack';

import { createStructuredSelector } from 'reselect';


import { ID } from "./constants";


import render, {componentDidMount, componentWillUnmount} from './render';
import selectTransition from './selectors/selectTransition';
import selectDirection from './selectors/selectDirection';
import selectOriginPosition from "./selectors/selectOriginPosition";



class Component extends React.Component {
    componentDidMount() {
        componentDidMount(this, this.props, this.state);
    }

    componentWillUnmount() {
        componentWillUnmount(this, this.props, this.state);
    }

    handleBackPress = () => {
        console.log('back!')
        this.props.goBack();
        return true;
    }

    render()
    {
        return render(this, this.props, this.state);
    }
}




Component.displayName = ID;


const mapState = createStructuredSelector({
	transition: selectTransition(),
    direction: selectDirection(),
    originPosition: selectOriginPosition(),
});

const mapDispatch = dispatch => ({
    goBack: () => dispatch(goBack())
});




const withConnect = connect(
    mapState,
    mapDispatch
);




const withReducer = injectReducer({ key: ID, reducer });
const withSaga = injectSaga({ key: ID, saga });


export default compose(
    withReducer,
    withSaga,
    withConnect,
)(Component);