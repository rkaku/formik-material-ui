import types from '../types/events'


function initialState () {
  return {
    items: []
  }
}

export default function ( state = initialState(), action ) {

  const items = state
  switch ( action.type ) {
    case types.GET_WALLET: // Wallet
      // console.log( 'read', action.response.data )
      return { items: action.response.data }
    case types.GET_POOL: // Pool
      return { item: action.response.data }
    case types.POST_SEND_MONEY: // Send
      // console.log( 'create', action.values )
      return items
    case types.GET_MINE: // Mine
      return items
    case types.GET_CHAIN: // Chain
      return { chain: action.response.data }
    default:
      return { ...items }
  }
}