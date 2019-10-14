import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './createReducer';
import createSaga from './createSaga';
import log from 'loglevel';



export default (initialState = {}) => {
	log.info('[redux] Creating store')

	const sagaMiddleware = createSagaMiddleware();

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
		createReducer(),
		initialState,
		composeEnhancers(...enhancers),
	);


	store.runSaga = sagaMiddleware.run;

	log.info('[redux] Starting Saga')
	store.runSaga(createSaga);


	
	return store;
}
