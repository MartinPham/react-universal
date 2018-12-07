// import invariant from 'invariant';
// import isEmpty from 'lodash/isEmpty';
// import isFunction from 'lodash/isFunction';
// import isString from 'lodash/isString';

// import checkStore from './checkStore';
import createReducer from "./createReducer";

export function injectReducerFactory(store, isValid) {
	return function injectReducer(key, reducer) {
		// if (!isValid) {
		// 	checkStore(store);
		// }

		// invariant(
		// 	isString(key) && !isEmpty(key) && isFunction(reducer),
		// 	'(src/utils/redux...) injectReducer: Expected `reducer` to be a reducer function',
		// );

		// Check `store.injectedReducers[key] === reducer` for hot reloading when a key is the same but a reducer is different
		if (Reflect.has(store.injectedReducers, key) && store.injectedReducers[key] === reducer) {
			return;
		}

		store.injectedReducers[key] = reducer; // eslint-disable-line no-param-reassign
		// store.replaceReducer(createReducer(store.injectedReducers));
		// 
		// 
		const rootReducer = createReducer(store.injectedReducers);
		// console.log(rootReducer);
		// console.log('replace reducer', rootReducer)
  		store.replaceReducer(rootReducer);
	};
}

export default function getInjectors(store) {
	// checkStore(store);
	
	if(typeof store ==='undefined')
	{
		store = global.store;
	}

	return {
		injectReducer: injectReducerFactory(store, true),
	};
}
