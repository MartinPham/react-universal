import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './createReducer';
import createSaga from './createSaga';
import log from 'loglevel';
import {getPlatform, PLATFORM_BROWSER} from "../platform";
import initialState from 'config/state';

let storeInstance = null

export default () => {
	if(storeInstance === null)
	{
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

		const preloadedInitialState = (getPlatform() === PLATFORM_BROWSER && global.__PRELOADED_STATE__) ? global.__PRELOADED_STATE__ : initialState

		storeInstance = createStore(
			createReducer(),
			preloadedInitialState,
			composeEnhancers(...enhancers),
		);


		storeInstance.runSaga = sagaMiddleware.run;

		log.info('[redux] Starting Saga')
		storeInstance.runSaga(createSaga);
	}


	


	
	return storeInstance;
}
