import React from 'react';

import BaseComponent from 'components/Component';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

import getInjectors from './reducerInjectors';

/**
 * Dynamically injects a reducer
 *
 * @param {string} key A key of the reducer
 * @param {function} reducer A reducer that will be injected
 *
 */
export default ({ key, reducer }) => WrappedComponent => {
	// console.log('gonna inject ', key)

	class ReducerInjector extends BaseComponent {
		static WrappedComponent = WrappedComponent;
		static contextTypes = {
			store: PropTypes.object.isRequired,
		};
		static displayName = `withReducer(${WrappedComponent.displayName ||
			WrappedComponent.name ||
			'Component'})`;



		injectors = getInjectors(this.context.store);

		componentWillMount() {
			

			// console.log('inject now');
		
			const { injectReducer } = this.injectors;

			injectReducer(key, reducer);
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	}

	return hoistNonReactStatics(ReducerInjector, WrappedComponent);
};
