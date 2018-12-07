import React from 'react';
import BaseComponent from 'components/Component';

import { connect } from 'react-redux';
// import { compose } from 'redux';
// import injectReducer from 'utils/redux/injectReducer';
// import injectSaga from 'utils/redux/injectSaga';
// import log from 'utils/log';


// import reducer from './reducer';
// import saga from './saga';

import { createStructuredSelector } from 'reselect';


import { ID } from "./constants";


import render from './render';
import selectUser from "./selectors/selectUser";
import selectToken from "./selectors/selectToken";
import updateUser from "./actions/updateUser";
import logout from "./actions/logout";
import Immutable from "immutable";




class Component extends BaseComponent {

    shouldComponentUpdate(nextProps, nextState)
    {
        if(
            !Immutable.is(this.props.user,  nextProps.user)
            || this.props.token !== nextProps.token
        ) {
            return true;
        }
        return false;
    }

    render()
    {
        // console.log('------------ Render Auth');
        return render(this, this.props, this.state);
    }
}




Component.displayName = ID;


const mapState = createStructuredSelector({
    user: selectUser(),
    token: selectToken()
});

const mapDispatch = dispatch => ({
    updateUser: () => dispatch(updateUser()),
    logout: () => dispatch(logout())
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