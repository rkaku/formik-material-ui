import types from '../types/blockchain'


function initialState () {
  return {
    wallet: {},
    pool: {},
    chain: {}
  }
}

export default function ( state = initialState(), action ) {

  switch ( action.type ) {
    case types.GET_WALLET:
      return { ...state, wallet: action.response.data }
    case types.POST_SEND_MONEY:
      return state
    case types.GET_POOL:
      return { ...state, pool: action.response.data }
    case types.GET_MINE:
      return state // :FIXME: {...state, pool: undefined}
    case types.GET_CHAIN:
      return { ...state, chain: action.response.data }
    default:
      return state
  }
}