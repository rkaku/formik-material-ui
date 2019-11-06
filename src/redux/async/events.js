import axios from 'axios'
import {
  readEvent,
  readEvents,
  createEvent,
  updateEvent,
  deleteEvent
} from './../creators/events'
import heroku from './../../api/heroku'
// import {
//   ROOT_URL,
//   EVENTS,
//   QUERYSTRING
// } from './../../api/heroku'


export function asyncReadEvents () {
  return async dispatch => {
    const response = await axios( {
      method: 'GET',
      url: heroku.ROOT_URL + heroku.EVENTS + heroku.QUERYSTRING
      // url: ROOT_URL + EVENTS + QUERYSTRING
    } )
    dispatch( readEvents( response ) )
  }
}

// export function asyncReadEvent ( id ) {
//   return async dispatch => {
//     const response = await axios( {
//       method: 'GET',
//       url: ROOT_URL + EVENTS + id + QUERYSTRING
//     } )
//     dispatch( readEvent( response ) )
//   }
// }

// export function asyncCreateEvent ( values ) {
//   return async dispatch => {
//     await axios( {
//       method: 'POST',
//       url: ROOT_URL + EVENTS + QUERYSTRING,
//       data: values
//     } )
//     dispatch( createEvent( values ) )
//   }
// }

// export function asyncUpdateEvent ( values ) {
//   return async dispatch => {
//     await axios( {
//       method: 'PUT',
//       url: ROOT_URL + EVENTS + values.id + QUERYSTRING,
//       data: values
//     } )
//     dispatch( updateEvent( values ) )
//   }
// }

// export function asyncDeleteEvent ( id ) {
//   return async dispatch => {
//     await axios( {
//       method: 'DELETE',
//       url: ROOT_URL + EVENTS + id + QUERYSTRING
//     } )
//     dispatch( deleteEvent( id ) )
//   }
// }