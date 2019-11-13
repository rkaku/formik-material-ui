import React from 'react'
import * as ReactRedux from 'react-redux'
import * as ReactRouter from 'react-router-dom'
// import { makeStyles } from '@material-ui/styles'
import { makeStyles } from '@material-ui/core/styles'
// import styled from 'styled-components'
import * as Async from '../redux/async/events'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import FormatBoldIcon from '@material-ui/icons/FormatBold'


export default function Container () {
  function Pool ( { tran } ) {
    const classes = useStyles()
    // [
    //   {
    //     "recipient_address": "2hTpb6dPuGehb3d73y6LqRkdguBLe1aRjEf",
    //     "sender_address": "2LEgdLLaUnoS5yqmPPxXpq7BCPtmMPdw1jV",
    //     "value": 100
    //   }
    // ]
    console.log( { tran } )
    return (
      <>
        <Grid container className={ classes.root } spacing={ 2 }>
          <Grid item xs={ 12 }>
            <Paper className={ classes.control }>
              <List component="nav" className={ classes.root } aria-label="contacts">
                <Divider />
                <ListItem button>
                  <ListItemIcon>
                    <EmailOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={ `Sender Address: ${tran.sender_address}` } />
                </ListItem>
                <Divider variant="middle" />
                <ListItem button>
                  <ListItemIcon>
                    <EmailOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={ `Recipient Address: ${tran.recipient_address}` } />
                </ListItem>
                <Divider variant="middle" />
                <ListItem button>
                  <ListItemIcon>
                    <FormatBoldIcon />
                  </ListItemIcon>
                  <ListItemText primary={ `Amount: ${tran.value} BTC` } />
                </ListItem>
                <Divider />
              </List>
            </Paper>
          </Grid>
        </Grid>
        {/* {
          selector && selector.map( ( tran ) => {
            console.log( { tran } )
            return (
              <>
                <div>{ tran.sender_address }</div>
                <div>{ tran.recipient_address }</div>
                <div>{ tran.value }</div>
              </>
            )
          } )
        } */}
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
  return (
    <>
      {
        selector && selector.map( ( tran ) => {
          console.log( { tran } )
          return ( <Pool tran={ tran } /> )
        } )
      }
    </>
  )
}

const useStyles = makeStyles( theme => ( {
  root: {
    width: '100%',
    maxWidth: 800,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing( 2 ),
  },
} ) );