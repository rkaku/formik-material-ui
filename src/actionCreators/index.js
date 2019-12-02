import axios from "api/axiosHeroku";
import heroku from "api/heroku";
// import types from "actionTypes";
import * as Actions from "actionCreators/blockchain";

/**
|--------------------------------------------------
| Returns Redux Thunk function that dispatches GET_WALLET action.
| @function getWallet
| @returns {function} - Redux Thunk function.
|--------------------------------------------------
*/
export function getWallet() {
  return async dispatch => {
    const response = await axios({
      method: "GET",
      url: heroku.WALLET,
    });
    // dispatch({ type: types.GET_WALLET, response: response });
    dispatch(Actions.getWallet(response));
  };
}

/**
|--------------------------------------------------
| Returns Redux Thunk function that dispatches SEND_MONEY action.
| @function sendMoney
| @param values - Private Key, Public Key, Address, Amount(BTC)
| @returns {function} - Redux Thunk function.
|--------------------------------------------------
*/
export function sendMoney(values) {
  return async dispatch => {
    await axios({
      method: "POST",
      url: heroku.SEND,
      data: values,
    });
    // dispatch({ type: types.POST_SEND_MONEY, values });
    dispatch(Actions.sendMoney(values));
  };
}

/**
|--------------------------------------------------
| Returns Redux Thunk function that dispatches GET_POOL action.
| @function getPool
| @returns {function} - Redux Thunk function.
|--------------------------------------------------
*/
export function getPool() {
  return async dispatch => {
    const response = await axios({
      method: "GET",
      url: heroku.POOL,
    });
    // dispatch({ type: types.GET_POOL, response });
    dispatch(Actions.getPool(response));
  };
}

/**
|--------------------------------------------------
| Returns Redux Thunk function that dispatches GET_MINE action.
| @function getMine
| @returns {function} - Redux Thunk function.
|--------------------------------------------------
*/
export function getMine() {
  return async dispatch => {
    const response = await axios({
      method: "GET",
      url: heroku.MINE,
    });
    console.log({ response });
    // dispatch({ type: types.GET_MINE, response });
    dispatch(Actions.getMine(response));
  };
}

/**
|--------------------------------------------------
| Returns Redux Thunk function that dispatches GET_CHAIN action.
| @function getChain
| @returns {function} - Redux Thunk function.
|--------------------------------------------------
*/
export function getChain() {
  return async dispatch => {
    const response = await axios({
      method: "GET",
      url: heroku.CHAIN,
    });
    // dispatch({ type: types.GET_CHAIN, response });
    dispatch(Actions.getChain(response));
  };
}
