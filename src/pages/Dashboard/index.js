import React from 'react';
import {BasePurePage} from 'pages/Page';


import compose from 'utils/redux/compose';



import { ID } from "./constants";

import logout from "../../components/AuthProvider/actions/logout";
import userSelector from "../../components/AuthProvider/selectors/userSelector";


class Page extends BasePurePage {

	render() {
		return (
			<div>
	
				Hello {this.props.user && this.props.user.get('name')}
	
	
				<button
					onClick={() => this.props.dispatch(logout())}
				>Logout</button>
			</div>
		);
	}
}

Page.displayName = ID;


const mapState = {
	user: userSelector
};



export default compose({
	ID,
	mapState
})(Page)