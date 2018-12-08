// import React from 'react';
import BaseComponent from 'components/Component';

import {ID} from "./constants";
import {createStructuredSelector} from "reselect";

import userSelector from "components/AuthProvider/selectors/userSelector";
import tokenSelector from "components/AuthProvider/selectors/tokenSelector";

import {connect} from "react-redux";
import platform, {PLATFORM_CLI} from "utils/platform";

import render from './render';

class Component extends BaseComponent {
	shouldComponentUpdate(nextProps, nextState) {
		if(platform === PLATFORM_CLI)
		{
			return true; // seems ink refresh the route wrongly
		}
		return false;
	}


	render() {
		return render(this, this.props, this.state);
	}
}


Component.displayName = ID;


const mapState = createStructuredSelector({
	user: userSelector(),
	token: tokenSelector()
});

const mapDispatch = dispatch => ({

});




const withConnect = connect(
	mapState,
	mapDispatch
);


export default withConnect(Component);