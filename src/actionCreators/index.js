import axios from "api/axiosHeroku";
import heroku from "api/heroku";
import types from "actionTypes";

export function getWallet() {
  return async dispatch => {
    const response = await axios({
      method: "GET",
      url: heroku.WALLET,
    });
    dispatch({ type: types.GET_WALLET, response: response });
  };
}

export function sendMoney(values) {
  return async dispatch => {
    await axios({
      method: "POST",
      url: heroku.SEND,
      data: values,
    });
    dispatch({ type: types.POST_SEND_MONEY, values });
  };
}

export function getPool() {
  return async dispatch => {
    const response = await axios({
      method: "GET",
      url: heroku.POOL,
    });
    dispatch({ type: types.GET_POOL, response });
  };
}

export function getMine() {
  return async dispatch => {
    const response = await axios({
      method: "GET",
      url: heroku.MINE,
    });
    dispatch({ type: types.GET_MINE, response });
  };
}

export function getChain() {
  return async dispatch => {
    const response = await axios({
      method: "GET",
      url: heroku.CHAIN,
    });
    dispatch({ type: types.GET_CHAIN, response });
  };
}