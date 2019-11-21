import types from '../types/blockchain'


export function getWallet ( response ) {
  return { type: types.GET_WALLET, response: response }
}

export function getPool ( response ) {
  return { type: types.GET_POOL, response }
}

export function sendMoney ( values ) {
  console.log( { values } )
  return { type: types.POST_SEND_MONEY, values }
}

export function getMine ( response ) {
  return { type: types.GET_MINE, response }
}

export function getChain ( response ) {
  return { type: types.GET_CHAIN, response }
}