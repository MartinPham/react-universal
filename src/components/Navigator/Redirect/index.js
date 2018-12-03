import React from 'react';
import { connect } from 'react-redux';
import { urlWithParams } from 'utils/queryString';
import push from 'components/Navigator/actions/push';
import navigatorDispatchProps from 'components/Navigator/utils/navigatorDispatchProps';
import BaseComponent from 'components/BaseComponent';


export class Component extends BaseComponent {
	componentDidMount() {
		this.props.redirect(this.props.to);
	}

	componentWillReceiveProps(nextProps) {

	}

	render() {
		
		return null;
	}
}

const mapDispatchToProps = dispatch => ({
	...navigatorDispatchProps(dispatch),

	redirect: to => {
		dispatch(
			push(
				urlWithParams(to.pathname, {
					intended: to.state.referer.pathname + to.state.referer.search,
				}),
			),
		);
	},
});

export default connect(
	state => ({}),
	mapDispatchToProps,
)(Component);

// const mapStateToProps = createStructuredSelector({
//                                                   data: dataSelector(),
//                                               });

// const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const withReducer = injectReducer({key: ID, reducer});
// const withSaga = injectSaga({key: ID, sagas});

// export default compose(
//  withReducer,
//  withSaga,
//  withConnect,
// )(Component);
