import React from 'react'
import './../styles/App.css'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { asyncReadEvents } from '../redux/async/events'


export default function Container () {
  function Blockchain () {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            { tbodyDisplay() }
          </tbody>
        </table>
        <Link to="/wallet">New Event</Link>
      </>
    )
  }


  const dispatch = useDispatch()
  React.useEffect( () => {
    dispatch( asyncReadEvents() )
  }, [ dispatch ] )
  const items = useSelector( state => state.events.items )
  console.log( { items } )
  const tbodyDisplay = React.useCallback( () => {
    return items.map( item => {
      return (
        <tr key={ item.id }>
          <td>{ item.id }</td>
          <td>{ item.title }</td>
          <td>{ item.body }</td>
        </tr>
      )
    } )
  }, [ items ] )
  return <Blockchain />
}