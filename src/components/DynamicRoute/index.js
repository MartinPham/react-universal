import React from 'react';
// import { Route } from 'react-router-dom';
import { Route } from 'react-router-native';
import {ID} from './constants';
import routeMounted from './actions/routeMounted';


import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


class Component extends React.Component {
	// shouldComponentUpdate() {
	// 	return false;
	// }

	componentDidMount()
	{
		// log('mount me', this.props)
		this.props.routeMounted({
			id: this.props.id,
			path: this.props.path,
			// params: this.props.computedMatch.params
		})
	}

	render() {
		return (({ component: Component, firewall, user, token, ...parameters }) => {
			let component = props => <Component {...props} />;

			// //log('>>>', id)

			if (
				firewall !== null &&
				typeof firewall !== 'undefined' &&
				!firewall.check(user, token)
			) {
				if (firewall.failedUrl === null || typeof firewall.failedUrl === 'undefined') {
					// //log('fw fail');
					component = null;//() => <div>Access denied</div>;
				} else {
					// //log('fw fail redirect');
					component = props => {
						// //log('.>>', props);
						let state = {};

						if (props.location.state) {
							state = props.location.state;
						}

						state.referer = {
							hash: props.location.hash,
							key: props.location.key,
							pathname: props.location.pathname,
							search: props.location.search,
						};

						// return <Redirect to={{ pathname: firewall.failedUrl, state }} />;
						// return (<Redirect to={{pathname: firewall.failedUrl, state}}/>);
					};
				}

				// //log('fw');
			}
			return <Route {...parameters} render={props => component(props)} />;
		})(this.props);
	}

	/*
	
	render()
	{
		// return (({component: Component, firewall, user, token, ...parameters}) => {
		return (({component, firewall, user, token, ...parameters}) => {
			// let component = (props) => <Component {...props} />;

			let componentRender = (props) => {
				let Component = require('pages/' + component).default;
				console.log("Loaded component ", component)
				return (<Component {...props} />);
			};
			
			// //log('>>>', id)
			
			if(firewall !== null && typeof firewall !== 'undefined' && !firewall.check(user, token))
			{
				if(firewall.failedUrl === null || typeof firewall.failedUrl === 'undefined')
				{
					// //log('fw fail');
					componentRender = () => <div>Access denied</div>
				} else {
					// //log('fw fail redirect');
					componentRender = (props) => {
						// //log('.>>', props);
						let state = {};

						if(props.location.state)
						{
							state = props.location.state;
						}

						state.referer = {
							hash: props.location.hash,
							key: props.location.key,
							pathname: props.location.pathname,
							search: props.location.search
						};

						return (<Redirect to={{pathname: firewall.failedUrl, state}}/>);
						// return (<Redirect to={{pathname: firewall.failedUrl, state}}/>);
					}
				}

				// //log('fw');
			}

			// let Component = require('pages/' + component).default;
			//
			// let c = (props) => <Component {...props} />;
			
			return (
				<Route
					{...parameters}
					render={componentRender}
				/>
			)
		})(this.props);
	}
	 */
}

/*
const SecurityRoute = ({component: Component, firewall, ...parameters}) => {
	let component = (props) => <Component {...props} />;
	if(firewall !== null && typeof firewall !== 'undefined' && !firewall.check())
	{
		if(firewall.failedUrl === null || typeof firewall.failedUrl === 'undefined')
		{
			//log('fw fail');
			component = () => <div>Access denied</div>
		} else {
			//log('fw fail redirect');
			component = (props) => {
				//log('.>>', props);
				let state = {};
				
				if(props.location.state)
				{
					state = props.location.state;
				}
				
				state.referer = {
					hash: props.location.hash,
					key: props.location.key,
					pathname: props.location.pathname,
					search: props.location.search
				};
				
				return (<Redirect push to={{pathname: firewall.failedUrl, state}}/>);
			}
		}

		//log('fw');
	}
	return (
		<Route
			{...parameters}
			render={(props) => component(props)}
		/>
	)
};
*/

// export default Component;

Component.displayName = ID;
// export default Header;

const mapDispatchToProps = dispatch => ({
	routeMounted: (data) => dispatch(routeMounted(data))
});
const mapStateToProps = createStructuredSelector({

});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Component);
