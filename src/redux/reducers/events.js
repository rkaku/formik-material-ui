import types from '../types/events'


function initialState () {
  return {
    items: []
  }
}

export default function ( state = initialState(), action ) {

  const items = state
  switch ( action.type ) {
    case types.READ_EVENTS:
      // console.log( 'read', action.response.data )
      return { items: action.response.data }
    case types.READ_EVENT:
      return { item: action.response.data }
    case types.CREATE_EVENT:
      // console.log( 'create', action.values )
      return items
    case types.UPDATE_EVENT:
      return items
    case types.DELETE_EVENT:
      return items
    default:
      return { ...items }
  }
}