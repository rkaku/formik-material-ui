import React from 'react'
import * as ReactRedux from 'react-redux'
import * as ReactRouter from 'react-router-dom'
import * as Yup from 'yup'
import {
  Formik,
  Form,
  Field,
  ErrorMessage
} from 'formik'
import {
  TextField,
  Switch,
  Select,
  fieldToTextField,
  TextFieldProps,
} from 'formik-material-ui'
import {
  Button,
  FormControl,
  LinearProgress,
  MenuItem,
  InputLabel,
  FormControlLabel,
  // TextField
} from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/styles'
import styled from 'styled-components'
import * as Async from '../redux/async/events'
import WalletTextField from './../layouts/form/WalletTextField'


export default function Container () {
  function Wallet () {
    return (
      <Formik
        enableReinitialize={ true }
        initialValues={
          initialValues
        }
        validationSchema={
          Yup.object(
            {
              address: Yup.string()
                .required( "Required" ),
              amount: Yup.number()
                .required( "Required" )
            }
          )
        }
        onSubmit={ ( values, { setSubmitting } ) => {
          _handleSubmit( values )
          setSubmitting( false )
          history.push( '/' )
        } }
      >
        { ( { isSubmitting, isValid, values } ) => (
          <Form>
            <WalletTextField
              name="privateKey"
              label="Private Key"
              type="text"
              placeholder="Private Key"
              value={ values.alicePrivKey }
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <WalletTextField
              name="publicKey"
              label="Public Key"
              type="text"
              placeholder="Public Key"
              value={ values.alicePubKey }
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <WalletTextField
              name="address"
              label="Address"
              type="text"
              placeholder="Address"
              value={ values.aliceAddress }
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <Field
              name="address"
              label="Address"
              type="text"
              placeholder="Address"
              component={TextField}
              fullWidth
              // variant=""
              margin="normal"
            />
            <Field
              name="amount"
              label="Amount"
              type="text"
              placeholder="Amount"
              component={ TextField }
              fullWidth
              // variant=""
              margin="normal"
            />
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              disabled={ !isValid || isSubmitting }
            >
              Submit
            </Button>
            <Button
              type="button"
              variant="outlined"
              color="secondary"
              component={ ReactRouter.Link }
              to="/"
            >
              Cancel
            </Button>
            <WalletTextField
              name="privateKey"
              label="Private Key"
              type="text"
              placeholder="Private Key"
              value={ values.bobPrivKey }
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <WalletTextField
              name="publicKey"
              label="Public Key"
              type="text"
              placeholder="Public Key"
              value={ values.bobPubKey }
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <WalletTextField
              name="address"
              label="Address"
              type="text"
              placeholder="Address"
              value={ values.bobAddress }
              fullWidth
              variant="outlined"
              margin="normal"
            />
          </Form>
        ) }
      </Formik>
    )
  }

  const history = ReactRouter.useHistory()
  const dispatch = ReactRedux.useDispatch()
  const selector = ReactRedux.useSelector( state => state.events.items )
  const _handleSubmit = React.useCallback( ( values ) => {
    dispatch( Async.asyncCreateEvent( values ) )
  }, [ dispatch ] )
  React.useEffect( () => {
    dispatch( Async.asyncReadEvents() )
  }, [ dispatch ] )
  console.log( { selector } )
  console.log( selector[ 0 ] )
  console.log( typeof selector[ 0 ] )
  const [ alice, setAlice ] = React.useState( { priv_key: "", pub_key: "", address: "" } )
  const [ bob, setBob ] = React.useState( { priv_key: "", pub_key: "", address: "" } )
  React.useMemo( () => {
    if ( selector[ 0 ] === undefined ) return
    if ( selector[ 1 ] === undefined ) return
    const alice = selector[ 0 ]
    const bob = selector[ 1 ]
    setAlice( {
      priv_key: alice.priv_key,
      pub_key: alice.pub_key,
      address: alice.address
    } )
    setBob( {
      priv_key: bob.priv_key,
      pub_key: bob.pub_key,
      address: bob.address
    } )
  }, [ selector ] )
  const initialValues = {
    alicePrivKey: alice.priv_key,
    alicePubKey: alice.pub_key,
    aliceAddress: alice.address,
    bobPrivKey: bob.priv_key,
    bobPubKey: bob.pub_key,
    bobAddress: bob.address,
  }
  return <Wallet />
}