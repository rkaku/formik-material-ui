import axios from '../../api/axiosHeroku'
import {
  getWallet,
  sendMoney,
  getPool,
  getMine,
  getChain
} from '../creators/blockchain'
import heroku from '../../api/heroku'


export function asyncGetWallet () { // Wallet
  return async dispatch => {
    const response = await axios( {
      method: 'GET',
      url: heroku.WALLET
    } )
    // console.log( { response } )
    dispatch( getWallet( response ) )
  }
}

export function asyncSendMoney ( values ) { // Send
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
    dispatch( sendMoney( values ) )
  }
}

export function asyncGetPool () { // Pool
  return async dispatch => {
    const response = await axios( {
      method: 'GET',
      url: heroku.POOL
    } )
    console.log( response )
    dispatch( getPool( response ) )
  }
}

export function asyncGetMine () { // Mine
  return async dispatch => {
    await axios( {
      method: 'GET',
      url: heroku.MINE
    } )
    dispatch( getMine() )
  }
}

export function asyncGetChain () { // Chain
  return async dispatch => {
    const response = await axios( {
      method: 'GET',
      url: heroku.CHAIN
    } )
    console.log( { response } )
    dispatch( getChain( response ) )
  }
}