import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import BaseComponent from 'components/BaseComponent';

import {ID} from './constants';
import push from 'components/Navigator/actions/push';
import navigatorDispatchProps from 'components/Navigator/utils/navigatorDispatchProps';



class Component extends BaseComponent {


	render() {
		return (
			<div>
				<ul>
					<li><a onClick={this.props.goHome}>Home</a></li>
					<li><a onClick={this.props.goAbout}>About</a></li>
				</ul>
			</div>
		);
	}
}


Component.displayName = ID;


const mapDispatchToProps = dispatch => ({
	...navigatorDispatchProps(dispatch),

	goHome: () => dispatch(push('@')),
	goAbout: () => dispatch(push('@About')),
});
const mapStateToProps = createStructuredSelector({

});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Component);
