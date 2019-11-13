import axios from './../../api/axiosHeroku'
import {
  readEvent,
  readEvents,
  createEvent,
  updateEvent,
  deleteEvent
} from './../creators/events'
import heroku from './../../api/heroku'


export function asyncReadEvents () { // Wallet
  return async dispatch => {
    const response = await axios( {
      method: 'GET',
      url: heroku.WALLET
    } )
    // console.log( { response } )
    dispatch( readEvents( response ) )
  }
}

export function asyncReadEvent () { // Pool
  return async dispatch => {
    const response = await axios( {
      method: 'GET',
      url: heroku.POOL
    } )
    dispatch( readEvent( response ) )
  }
}

export function asyncCreateEvent ( values ) { // Send
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

export function asyncUpdateEvent ( ) { // Mine
  return async dispatch => {
    await axios( {
      method: 'GET',
      url: heroku.MINE
    } )
    console.log('mine')
    dispatch( updateEvent() )
  }
}

export function asyncDeleteEvent () { // Chain
  return async dispatch => {
    await axios( {
      method: 'GET',
      url: heroku.CHAIN
    } )
    dispatch( deleteEvent() )
  }
}