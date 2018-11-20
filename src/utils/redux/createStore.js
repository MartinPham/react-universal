import { createStore, applyMiddleware, compose } from "redux";
// import createSagaMiddleware, { END } from 'redux-saga';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from "connected-react-router";
// import thunk from "redux-thunk";
import { createBrowserHistory, createMemoryHistory } from "history";
import platform, {PLATFORM_BROWSER, PLATFORM_NATIVE, PLATFORM_NODE} from "../platform";

import createRootReducer from "./createRootReducer";
// import {fromJS} from "immutable";

export default (url = "/") => {
    // Create a history depending on the environment

    let history;

    if (platform === PLATFORM_NODE || platform === PLATFORM_NATIVE)
    {
        history = createMemoryHistory({
            initialEntries: [url]
        });
    } else {
        history = createBrowserHistory();
    }

    const enhancers = [];

    // Dev tools are helpful
    if (process.env.NODE_ENV === "development" && !(platform === PLATFORM_NODE)) {
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
    // const initialState = !(platform === PLATFORM_NODE) ? window.__PRELOADED_STATE__ : {};
    let initialState = (platform === PLATFORM_BROWSER) ? window.__PRELOADED_STATE__ : undefined;

    // Delete it once we have it stored in a variable
    // if (!(platform === PLATFORM_NODE)) {
    // if (platform === PLATFORM_BROWSER)
    // {
    //     delete window.__PRELOADED_STATE__;
    // }
    //
    // if (typeof initialState !== 'undefined')
    // {
    //     for(let key in initialState)
    //     {
    //         if(key !== 'router')
    //         {
    //             initialState[key] = fromJS(initialState[key]);
    //         }
    //     }
    // } else {
    //     initialState = {};
    // }

    if (typeof initialState !== 'undefined')
    {

    } else {
        initialState = {};
    }

    if(platform === PLATFORM_BROWSER)
    {
        window.__PRELOADED_STATE__ = initialState;
    }

    console.log('initialState', initialState);


    // Create the store
    const store = createStore(
        (state = initialState, action) => state,
        initialState,
        composedEnhancers
    );



    store.history = history;
    const reducer = createRootReducer(store.history);

    store.replaceReducer(reducer);

    store.injectedReducers = {}; // Reducer registry
    store.injectedSagas = {}; // Saga registry

    store.runSaga = () => {};

    if(!(platform === PLATFORM_NODE))
    {
        // saga only for client
        store.injectedSagas = {}; // Saga registry
        store.runSaga = sagaMiddleware.run;
    }


    // store.close = () => store.dispatch(END);

    if(platform === PLATFORM_BROWSER)
    {
        window.store = store;
    }

    return {
        store,
        history
    };
};
