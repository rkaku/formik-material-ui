import types from '../types/events'


export function readEvents ( response ) {
  return { type: types.READ_EVENTS, response: response }
}

export function readEvent ( response ) {
  return { type: types.READ_EVENT, response }
}

export function createEvent ( values ) {
  console.log( { values } )
  return { type: types.CREATE_EVENT, values }
}

export function updateEvent ( values ) {
  return { type: types.UPDATE_EVENT, values }
}

export function deleteEvent ( id ) {
  return { type: types.DELETE_EVENT, id }
}