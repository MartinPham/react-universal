// import React from 'react';
import {BasePurePage} from 'pages/Page';

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
import userSelector from "components/AuthProvider/selectors/userSelector";
import tokenSelector from "components/AuthProvider/selectors/tokenSelector";
import push from "components/Navigator/actions/push";
import sharedHistory from "utils/sharedHistory";

import queryString from 'query-string';

class Page extends BasePurePage {
	gonnaLeave = false;

	loggedInCheck = () => {
		setTimeout(() => {
			if(this.gonnaLeave)
			{
				return;
			}

			if(this.props.user && this.props.token)
			{
				this.gonnaLeave = true;

				// console.log('>>>', sharedHistory().history.location)
				const location = sharedHistory().history.location;

				const queryParams = queryString.parse(location.search);

				// console.log(queryParams);

				this.props.push(queryParams.refererUrl || '/', {}, 'flyDown');
				// this.props.push('/dashboard', {}, 'flyDown');
			}
		}, 500);

	};

	componentDidUpdate() {
		// console.log(this.props)
		this.loggedInCheck();
	}

	componentDidMount() {
		this.loggedInCheck();
	}

	render() {
		// console.log('PAGE RENDER: Login');

		if(this.props.user && this.props.token)
		{
			return null;
		}

		return render(this, this.props, this.state);
	}
}

Page.displayName = ID;


const mapState = createStructuredSelector({
	user: userSelector,
	token: tokenSelector
});

const mapDispatch = dispatch => ({
	updateUser: (user, token) => dispatch(updateUser(user, token)),
	push: (path, data, transition) => dispatch(push(path, data, transition))
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
