import types from '../types/events'


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

export function getMine () {
  return { type: types.GET_MINE }
}

export function getChain ( response ) {
  return { type: types.GET_CHAIN, response }
}