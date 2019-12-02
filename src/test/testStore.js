import { applyMiddleware, createStore } from "redux";
import { middleware } from "store";
import rootReducer from "reducers";

export default initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};
