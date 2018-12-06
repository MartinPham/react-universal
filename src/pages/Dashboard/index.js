import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/redux/injectReducer';
import injectSaga from 'utils/redux/injectSaga';
// import log from 'utils/log';

import updateUser from 'components/AuthProvider/actions/updateUser';

import reducer from './reducer';
import saga from './saga';

import { createStructuredSelector } from 'reselect';


import { ID } from "./constants";

import render from './render';
import logout from "../../components/AuthProvider/actions/logout";
import selectUser from "../../components/AuthProvider/selectors/selectUser";


class Page extends React.Component {

	render() {
		return render(this, this.props, this.state);
	}
}

Page.displayName = ID;


const mapState = createStructuredSelector({
	user: selectUser()
});

const mapDispatch = dispatch => ({
    updateUser: (user, token) => dispatch(updateUser(user, token)),
    logout: () => dispatch(logout()),
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
)(Page);
