import React from 'react';
import {BasePurePage} from 'pages/Page';

import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/redux/injectReducer';
import injectSaga from 'utils/redux/injectSaga';


import updateUser from 'components/AuthProvider/actions/updateUser';

import reducer from './reducer';
import saga from './saga';

import { createStructuredSelector } from 'reselect';


import { ID } from "./constants";

import logout from "../../components/AuthProvider/actions/logout";
import userSelector from "../../components/AuthProvider/selectors/userSelector";


class Page extends BasePurePage {

	render() {
		return (
			<div>
	
				Hello {this.props.user && this.props.user.get('name')}
	
	
				<button
					onClick={this.props.logout}
				>Logout</button>
			</div>
		);
	}
}

Page.displayName = ID;


const mapState = createStructuredSelector({
	user: userSelector
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
