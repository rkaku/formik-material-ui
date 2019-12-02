import React from "react";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  createStore,
  // compose
} from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "reducers";

export const middleware = [reduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export const store = createStoreWithMiddleware(rootReducer);

/**
 * Create Provider and a Store with imported reducers, middleware, and initial state.
 *   globals: reducers, middleware.
 * @function
 * @param {JSX} children - JSX Element
 * @param {object} initialState - Initial state for this store.
 * @returns {Store} - Provider with Redux store.
 */
export default ({ children, initialState = {} }) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware),
  );
  return <Provider store={store}>{children}</Provider>;
};

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : compose;
// const enhancer = composeEnhancers(applyMiddleware(thunk));

// export const store = createStore(rootReducer, enhancer);
