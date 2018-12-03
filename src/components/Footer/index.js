import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import BaseComponent from 'components/BaseComponent';

import {ID} from './constants';
import navigatorDispatchProps from 'components/Navigator/utils/navigatorDispatchProps';



class Component extends BaseComponent {


	render() {
		return (
			<div>
				Footer
			</div>
		);
	}
}


Component.displayName = ID;


const mapDispatchToProps = dispatch => ({
	...navigatorDispatchProps(dispatch),

});
const mapStateToProps = createStructuredSelector({
	
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Component);
