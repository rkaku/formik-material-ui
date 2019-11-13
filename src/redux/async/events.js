import axios from './../../api/axiosHeroku'
import {
  readEvent,
  readEvents,
  createEvent,
  updateEvent,
  deleteEvent
} from './../creators/events'
import heroku from './../../api/heroku'


export function asyncReadEvents () {
  return async dispatch => {
    const response = await axios( {
      method: 'GET',
      url: heroku.WALLET
    } )
    // console.log( { response } )
    dispatch( readEvents( response ) )
  }
}

export function asyncReadEvent () {
  return async dispatch => {
    const response = await axios( {
      method: 'GET',
      url: heroku.POOL
    } )
    dispatch( readEvent( response ) )
  }
}

export function asyncCreateEvent ( values ) {
  return async dispatch => {
    console.log( { values } )
    await axios( {
      method: 'POST',
      url: heroku.SEND,
      // headers: {
      //   "contentType": "application/json"
      // },
      data: values
    } )
    console.log( { values } )
    dispatch( createEvent( values ) )
  }
}

// export function asyncUpdateEvent ( values ) {
//   return async dispatch => {
//     await axios( {
//       method: 'PUT',
//       url: heroku.ROOT_URL + heroku.EVENTS + values.id + heroku.QUERYSTRING,
//       data: values
//     } )
//     dispatch( updateEvent( values ) )
//   }
// }

// export function asyncDeleteEvent ( id ) {
//   return async dispatch => {
//     await axios( {
//       method: 'DELETE',
//       url: heroku.ROOT_URL + heroku.EVENTS + id + heroku.QUERYSTRING
//     } )
//     dispatch( deleteEvent( id ) )
//   }
// }