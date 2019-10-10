
import createReducer from "./createReducer";

export function injectReducerFactory(store, isValid) {
	return function injectReducer(key, reducer) {
		// Check `store.injectedReducers[key] === reducer` for hot reloading when a key is the same but a reducer is different
		if (Reflect.has(store.injectedReducers, key) && store.injectedReducers[key] === reducer) {
			return;
		}

		store.injectedReducers[key] = reducer; // eslint-disable-line no-param-reassign

		const rootReducer = createReducer(store.injectedReducers);

  		store.replaceReducer(rootReducer);
	};
}

export default function getInjectors(store) {
	if(store === void 0)
	{
		if(global && global.store)
		{
			store = global.store;
		} else if(window && window.store)
		{
			store = window.store;
		} 
	}

	return {
		injectReducer: injectReducerFactory(store, true),
	};
}
