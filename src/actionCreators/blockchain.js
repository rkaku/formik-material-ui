import types from "actionTypes";

/**
|--------------------------------------------------
| @function getWallet
| @param {object} response - Wallet data.
| @returns {object} - Action object with type 'GET_WALLET' and response data.
|--------------------------------------------------
*/
export function getWallet(response) {
  return { type: types.GET_WALLET, response: response };
}

/**
|--------------------------------------------------
| @function sendMoney
| @param {object} values - Form data.
| @returns {object} - Action object with type 'SEND_MONEY' and values.
|--------------------------------------------------
*/
export function sendMoney(values) {
  return { type: types.POST_SEND_MONEY, values };
}

/**
|--------------------------------------------------
| @function getPool
| @param {array} response - Pool data.
| @returns {object} - Action object with type 'GET_POOL' and response data.
|--------------------------------------------------
*/
export function getPool(response) {
  return { type: types.GET_POOL, response };
}

/**
|--------------------------------------------------
| @function getMine
| @param {boolean} response - Mining results.
| @returns {object} - Action object with type 'GET_MINE' and response data.
|--------------------------------------------------
*/
export function getMine(response) {
  return { type: types.GET_MINE, response };
}

/**
|--------------------------------------------------
| @function getChain
| @param {object} response Blockchain data.
| @returns {object} - Action object with type 'GET_CHAIN' and response data.
|--------------------------------------------------
*/
export function getChain(response) {
  return { type: types.GET_CHAIN, response };
}
