import { createStore, applyMiddleware, compose } from "redux";
// import createSagaMiddleware, { END } from 'redux-saga';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from "connected-react-router";
// import thunk from "redux-thunk";
import { createBrowserHistory, createMemoryHistory } from "history";
import isServer from "../isServer";

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import rootReducer from "../../reducer";

const createRootReducer = (history, injectedReducers) =>
    combineReducers({
        router: connectRouter(history),
        root: rootReducer,
        ...injectedReducers
    });

export default (url = "/") => {
    // Create a history depending on the environment
    const history = isServer
        ? createMemoryHistory({
            initialEntries: [url]
        })
        : createBrowserHistory();

    const enhancers = [];

    // Dev tools are helpful
    if (process.env.NODE_ENV === "development" && !isServer) {
        const devToolsExtension = window.devToolsExtension;

        if (typeof devToolsExtension === "function") {
            enhancers.push(devToolsExtension());
        }
    }

    // create the saga middleware
    const sagaMiddleware = createSagaMiddleware();

    // const middleware = [sagaMiddleware, thunk, routerMiddleware(history)];
    const middleware = [sagaMiddleware, routerMiddleware(history)]; // disable thunk
    const composedEnhancers = compose(
        applyMiddleware(...middleware),
        ...enhancers
    );

    // Do we have preloaded state available? Great, save it.
    const initialState = !isServer ? window.__PRELOADED_STATE__ : {};

    // Delete it once we have it stored in a variable
    if (!isServer) {
        delete window.__PRELOADED_STATE__;
    }



    // Create the store
    const store = createStore(
        state => state,
        initialState,
        composedEnhancers
    );



    store.history = history;
    const reducer = createRootReducer(store.history);

    store.replaceReducer(reducer);

    store.injectedReducers = {}; // Reducer registry
    store.injectedSagas = {}; // Saga registry

    store.runSaga = () => {};

    if(!isServer)
    {
        // saga only for client
        store.injectedSagas = {}; // Saga registry
        store.runSaga = sagaMiddleware.run;
    }


    // store.close = () => store.dispatch(END);

    return {
        store,
        history
    };
};
