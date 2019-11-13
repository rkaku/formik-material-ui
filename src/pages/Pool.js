import React from 'react'
import * as ReactRedux from 'react-redux'
import * as ReactRouter from 'react-router-dom'
import {
  Button,
  FormControl,
  LinearProgress,
  MenuItem,
  InputLabel,
  FormControlLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import styled from 'styled-components'
import * as Async from '../redux/async/events'


export default function Container () {
  function Pool () {
    // [
    //   {
    //     "recipient_address": "2hTpb6dPuGehb3d73y6LqRkdguBLe1aRjEf",
    //     "sender_address": "2LEgdLLaUnoS5yqmPPxXpq7BCPtmMPdw1jV",
    //     "value": 100
    //   }
    // ]
    return (
      <>
        {
          selector && selector.map( ( tran ) => {
            return tran.map( ( el ) => (
              <>
                <div>{ el.sender_address }</div>
                <div>{ el.recipient_address }</div>
                <div>{ el.value }</div>
              </>
            ) )
          } )
        }
      </>
    )
  }

  const history = ReactRouter.useHistory()
  const dispatch = ReactRedux.useDispatch()
  // const _handleSubmit = React.useCallback( ( values ) => {
  //   dispatch( Async.asyncCreateEvent( values ) )
  // }, [ dispatch ] )
  React.useEffect( () => {
    dispatch( Async.asyncReadEvent() )
  }, [ dispatch ] )
  const selector = ReactRedux.useSelector( state => state.events.item )
  console.log( selector )
  return <Pool />
}