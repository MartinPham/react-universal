import React from 'react';
import {BasePurePage} from 'pages/Page';

import compose from 'utils/redux/compose';

import updateUser from 'components/AuthProvider/actions/updateUser';


import { createStructuredSelector } from 'reselect';


import { ID } from "./constants";

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

		return (
			<div>
	
				<button
					onClick={() => this.props.updateUser({
						name: 'Martin'
					}, 'nekot')}
				>Login</button>
				<button
					onClick={() => this.props.push('/', {}, 'flyDown')}
				>Go Home</button>
	
			</div>
		);
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



export default compose({
	ID,
	mapState,
	mapDispatch
})(Page)