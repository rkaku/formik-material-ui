import { applyMiddleware, createStore } from "redux";
import { middleware } from "store";
import rootReducer from "reducers";

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 *  globals: rootReducer, middleware.
 * @function storeFactory
 * @param {object} initialState - Initial state for this store.
 * @returns {Store} - Redux store.
 */
export default initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};
