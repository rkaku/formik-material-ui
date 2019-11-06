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
      console.log( action.response.data )
      return { items: action.response.data }
    // case types.READ_EVENT:
    //   return { ...items, item: action.response.data }
    case types.CREATE_EVENT:
      return { ...items, [ action.values.id ]: action.values }
    // case types.UPDATE_EVENT:
    //   return { ...items, [ action.values.id ]: action.values }
    // case types.DELETE_EVENT:
    //   delete items[ action.id ]
    //   return { ...items }
    default:
      return { ...items }
  }
}