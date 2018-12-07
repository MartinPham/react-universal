import React from 'react';
import BaseComponent from 'components/Component';


import { connect } from 'react-redux';
// import { compose } from 'redux';
// import injectReducer from 'utils/redux/injectReducer';
// import injectSaga from 'utils/redux/injectSaga';
// import log from 'utils/log';


// import reducer from './reducer';
// import saga from './saga';
import goBack from './actions/goBack';

import { createStructuredSelector } from 'reselect';


import { ID } from "./constants";


import render, {componentDidMount, componentWillUnmount} from './render';
import selectTransition from './selectors/selectTransition';
import selectDirection from './selectors/selectDirection';
import selectOriginPosition from "./selectors/selectOriginPosition";
// import selectUser from "../AuthProvider/selectors/selectUser";
// import selectToken from "../AuthProvider/selectors/selectToken";
// import Immutable from "immutable";



class Component extends BaseComponent {

    // shouldComponentUpdate(nextProps, nextState)
    // {
    //     if (
    //         this.props.transition != nextProps.transition
    //         || this.props.direction != nextProps.direction
    //         || !Immutable.is(this.props.originPosition,  nextProps.originPosition)
    //     ) {
    //         console.log('nav should update');
    //         return true;
    //     }
    //     return false;
    // }

	// componentDidUpdate() {
	// 	console.log('nav update')
	// }

    componentDidMount() {
        componentDidMount(this, this.props, this.state);
    }

    componentWillUnmount() {
        componentWillUnmount(this, this.props, this.state);
    }

    handleBackPress = () => {
        console.log('back!');
        this.props.goBack();
        return true;
    };

    render()
    {
        // console.log('nav render');
        return render(this, this.props, this.state);
    }
}




Component.displayName = ID;


const mapState = createStructuredSelector({
	transition: selectTransition(),
    direction: selectDirection(),
    originPosition: selectOriginPosition(),
    // user: selectUser(),
    // token: selectToken()
});

const mapDispatch = dispatch => ({
    goBack: () => dispatch(goBack())
});




const withConnect = connect(
    mapState,
    mapDispatch
);


export default withConnect(Component);


// const withReducer = injectReducer({ key: ID, reducer });
// const withSaga = injectSaga({ key: ID, saga });
//
//
// export default compose(
//     withReducer,
//     withSaga,
//     withConnect,
// )(Component);
