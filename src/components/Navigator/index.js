import React from 'react';


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
import selectUser from "../AuthProvider/selectors/selectUser";
import selectToken from "../AuthProvider/selectors/selectToken";
import selectLocation from "./selectors/selectLocation";
import Immutable from "immutable";
import createRouteComponents from "./utils/createRouteComponents";
import RouteList from "./RouteList";



class Component extends React.Component {
    // routeList = (
    //     <RouteList
    //         routes={this.props.routes}
    //         user={this.props.user}
    //         token={this.props.token}
    //     />
    // );

    routeList = createRouteComponents(
        this.props.routes,
        this.props.user,
        this.props.token
    );

    // shouldComponentUpdate(nextProps, nextState)
    // {
    //     if(
    //         !Immutable.is(this.props.user,  nextProps.user)
    //         || this.props.token != nextProps.token
    //         || this.props.transition != nextProps.transition
    //         || this.props.direction != nextProps.direction
    //         || !Immutable.is(this.props.originPosition,  nextProps.originPosition)
    //         || !Immutable.is(this.props.location,  nextProps.location)
    //     ) {
    //         console.log('nav should update');
    //         return true;
    //     }
    //     return false;
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
        console.log('nav render');
        return render(this, this.props, this.state);
    }
}




Component.displayName = ID;


const mapState = createStructuredSelector({
	transition: selectTransition(),
    direction: selectDirection(),
    originPosition: selectOriginPosition(),
    location: selectLocation(),
    user: selectUser(),
    token: selectToken()
});

const mapDispatch = dispatch => ({
    goBack: () => dispatch(goBack())
});




const withConnect = connect(
    mapState,
    mapDispatch
);


export default withConnect(Component);

/*
const withReducer = injectReducer({ key: ID, reducer });
const withSaga = injectSaga({ key: ID, saga });


export default compose(
    withReducer,
    withSaga,
    withConnect,
)(Component);
*/