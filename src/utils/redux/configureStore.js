import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './createRootReducer';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {

	const middlewares = [sagaMiddleware];

	const enhancers = [applyMiddleware(...middlewares)];


	const composeEnhancers =
		process.env.NODE_ENV !== 'production' &&
		typeof window === 'object' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
					shouldHotReload: false,
			  })
			: compose;


	const store = createStore(
		createRootReducer(),
		initialState,
		composeEnhancers(...enhancers),
	);


	store.runSaga = sagaMiddleware.run;
	store.injectedReducers = {}; // Reducer registry
	store.injectedSagas = {}; // Saga registry

	if (module.hot) {
		module.hot.accept('./createRootReducer', () => {
			store.replaceReducer(createRootReducer(store.injectedReducers));
		});
	}

	return store;
}
