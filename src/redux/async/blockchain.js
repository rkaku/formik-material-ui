import axios from '../../api/axiosHeroku'
import * as Creators from '../creators/blockchain'
import heroku from '../../api/heroku'
// import {
//   getWallet,
//   sendMoney,
//   getPool,
//   getMine,
//   getChain
// } from '../creators/blockchain'


export function asyncGetWallet () {
  return async dispatch => {
    const response = await axios( {
      method: 'GET',
      url: heroku.WALLET
    } )
    dispatch( Creators.getWallet( response ) )
  }
}

export function asyncSendMoney ( values ) {
  return async dispatch => {
    console.log( { values } )
    await axios( {
      method: 'POST',
      url: heroku.SEND,
      data: values
    } )
    dispatch( Creators.sendMoney( values ) )
  }
}

export function asyncGetPool () {
  return async dispatch => {
    const response = await axios( {
      method: 'GET',
      url: heroku.POOL
    } )
    dispatch( Creators.getPool( response ) )
  }
}

export function asyncGetMine () {
  return async dispatch => {
    const response = await axios( {
      method: 'GET',
      url: heroku.MINE
    } )
    dispatch( Creators.getMine( response ) )
  }
}

export function asyncGetChain () {
  return async dispatch => {
    const response = await axios( {
      method: 'GET',
      url: heroku.CHAIN
    } )
    dispatch( Creators.getChain( response ) )
  }
}