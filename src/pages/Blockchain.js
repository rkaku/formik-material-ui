import React from 'react'
import * as ReactRedux from 'react-redux'
import * as ReactRouter from 'react-router-dom'
import './../styles/App.css'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import * as Async from '../redux/async/events'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import EnhancedEncryptionOutlinedIcon from '@material-ui/icons/EnhancedEncryptionOutlined';
import TagFacesOutlinedIcon from '@material-ui/icons/TagFacesOutlined';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import FormatColorTextOutlinedIcon from '@material-ui/icons/FormatColorTextOutlined';
import FormatBoldOutlinedIcon from '@material-ui/icons/FormatBoldOutlined';
import MoodOutlinedIcon from '@material-ui/icons/MoodOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


export default function C () {
  function Chain ( { chain } ) {
    const classes = useStyles()
    console.log( 'chain' )
    console.log( { chain } )
    return (
      <>
        <Grid container className={ classes.root } spacing={ 2 }>
          <Grid item xs={ 12 }>
            <Paper className={ classes.control }>
              <List component="nav" className={ classes.root } aria-label="contacts">
                <Divider />
                <ListItem button>
                  <ListItemIcon>
                    <VpnKeyOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={ `Nonce: ${ chain.nonce }` } />
                </ListItem>
                <Divider variant="middle" />
                <ListItem button>
                  <ListItemIcon>
                    <EnhancedEncryptionOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={ `Previous Hash: ${ chain.previous_hash }` } />
                </ListItem>
                <Divider variant="middle" />
                <ListItem button>
                  <ListItemIcon>
                    <AccessTimeOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={ `Time Stamp: ${ chain.timestamp }` } />
                </ListItem>
                <Divider variant="middle" />
                <ListItem button>
                  <ListItemIcon>
                    <ArrowDropDownIcon />
                  </ListItemIcon>
                  <ListItemText primary={ `Transactions: ${ chain.transactions }` } />
                </ListItem>
                <Divider variant="middle" />
                {/* <ListItem button>
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText inset secondary="Sender Address" />
                </ListItem>
                <Divider component="li" variant="inset" />
                <ListItem button>
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText inset secondary="Recipient Address" />
                </ListItem>
                <Divider component="li" variant="inset" />
                <ListItem button>
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText inset secondary="Amount" />
                </ListItem> */}
                <Divider />
              </List>
            </Paper>
          </Grid>
        </Grid>
      </>
    )
  }


  const dispatch = useDispatch()
  React.useEffect( () => {
    dispatch( Async.asyncDeleteEvent() )
  }, [ dispatch ] )
  const selector = ReactRedux.useSelector( state => state.events.chain )
  console.log( { selector } )
  console.log( selector )
  if (selector !== undefined) {
    console.log(selector[0])
  }
  // const chains = selector[ 0 ]
  // const aliceAmount = selector[ 1 ]
  // const bobAmount = selector[ 2 ]
  return (
    <>
      {
        selector && selector[ 0 ].map( ( chain, index ) => {
        //   chains && chains.map( ( chain, index ) => {
          console.log( { chain } )
          return ( <Chain key={ index } chain={ chain } /> )
        } )
      }
    </>
  )
}


const useStyles = makeStyles( theme => ( {
  root: {
    width: '100%',
    maxWidth: 960,
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


// [
//   [
//     {
//       nonce: 0,
//       previous_hash: "44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a",
//       timestamp: "2019-11-12 10:41:03 +0900",
//       transactions: []
//     },
//     {
//       nonce: 10374,
//       previous_hash: "2358632ad548aec8f6736120a9f5230072607756b1286c00765b22d77a42417e",
//       timestamp: "2019-11-12 10:41:41 +0900",
//       transactions: [
//         {
//           recipient_address: "2hTpb6dPuGehb3d73y6LqRkdguBLe1aRjEf",
//           sender_address: "2LEgdLLaUnoS5yqmPPxXpq7BCPtmMPdw1jV",
//           value: 100
//         },
//         {
//           recipient_address: "2VTnrimUwphfxyDQLVarHdB9qh8dgaqjgcP",
//           sender_address: "a0dc65ffca799873cbea0ac274015b9526505daaaed385155425f7337704883e",
//           value: 1
//         }
//       ]
//     }
//   ],
//   -100,
//   100
// ]

// (3) [Array(4), -400, 400]
// 0: (4) [{…}, {…}, {…}, {…}]
// 1: -400
// 2: 400

// chain: Array( 4 )
// 0: { nonce: 0, previous_hash: "44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a", timestamp: "2019-11-13 23:37:58 +0000", transactions: Array( 0 ) }
// 1: { nonce: 206, previous_hash: "2ac88683c5d20a3fa9516c3b5d790d22402d7a86c858c1bb55f17becaff1009d", timestamp: "2019-11-13 23:42:08 +0000", transactions: Array( 2 ) }
// 2: { nonce: 76, previous_hash: "f01029b51ce0800028ff19fc4549829083c59a581ef4ba611f5664c16598b664", timestamp: "2019-11-13 23:46:07 +0000", transactions: Array( 1 ) }
// 3: { nonce: 490, previous_hash: "681f2bae907594ba9b7c51b028590ad451074d0f6cc04c64dc18ef590eb9a86c", timestamp: "2019-11-13 23:56:20 +0000", transactions: Array( 2 ) }