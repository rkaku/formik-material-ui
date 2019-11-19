import React from 'react'
import * as ReactRedux from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import * as Async from '../redux/async/blockchain'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import FormatBoldIcon from '@material-ui/icons/FormatBold'
// import Button from '@material-ui/core/Button'
// import MineSnackbarButton from '../layouts/buttons/MineSnackbarButton'
import MineCircleButton from '../layouts/buttons/MineCircleButton'
import Box from '@material-ui/core/Box'
// import Container from '@material-ui/core/Container'


export default function C () {
  function Pool ( { tran } ) {
    const classes = useStyles()
    return (
      <Box maxWidth="840px" ml="auto" mr="auto">
        <Grid container className={ classes.root } spacing={ 2 }>
          <Grid item xs={ 12 }>
            <Paper className={ classes.control }>
              <List component="nav" className={ classes.root } aria-label="contacts">
                <Divider />
                <ListItem button>
                  <ListItemIcon>
                    <EmailOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={ `Sender Address: ${ tran.sender_address }` } />
                </ListItem>
                <Divider variant="middle" />
                <ListItem button>
                  <ListItemIcon>
                    <EmailOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={ `Recipient Address: ${ tran.recipient_address }` } />
                </ListItem>
                <Divider variant="middle" />
                <ListItem button>
                  <ListItemIcon>
                    <FormatBoldIcon />
                  </ListItemIcon>
                  <ListItemText primary={ `Amount: ${ tran.value } BTC` } />
                </ListItem>
                <Divider />
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    )
  }

  const dispatch = ReactRedux.useDispatch()
  const _handleOnClick = React.useCallback( () => {
    dispatch( Async.asyncGetMine() )
  }, [ dispatch ] )
  React.useEffect( () => {
    dispatch( Async.asyncGetPool() )
  }, [ dispatch ] )
  const selector = ReactRedux.useSelector( state => state.blockchain.pool )
  console.log( selector )
  return (
    <Box minHeight="80vh">
      <Box m={ 2 }>
        <MineCircleButton
          onClick={ _handleOnClick }
        />
      </Box>
      {/* <MineSnackbarButton
        onClick={ _handleOnClick }
      /> */}
      {/* <Button
        type="button"
        variant="outlined"
        color="primary"
        onClick={ _handleOnClick }
      >
        Mine
      </Button> */}
        {
          selector && selector.map( ( tran, index ) => {
            console.log( { tran } )
            return ( <Pool key={ index } tran={ tran } /> )
          } )
        }
    </Box>
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
    width: 400,
  },
  control: {
    padding: theme.spacing( 2 ),
  },
} ) );

// const transactionStyle = {
//   position: "absolute",
//   width: "66.6%",
//   top: "33.3%",
//   left: "50%",
//   // textAlign: "center",
//   "-ms-transform": "translate( -50%, -50%)",
//   "-webkit-transform": "translate( -50%, -50%)",
//   transform: "translate( -50%, -50%)"
// }

// [
//   {
//     "recipient_address": "2hTpb6dPuGehb3d73y6LqRkdguBLe1aRjEf",
//     "sender_address": "2LEgdLLaUnoS5yqmPPxXpq7BCPtmMPdw1jV",
//     "value": 100
//   }
// ]