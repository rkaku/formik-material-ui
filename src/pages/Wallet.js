import React from 'react'
import * as ReactRedux from 'react-redux'
import * as ReactRouter from 'react-router-dom'
import * as Yup from 'yup'
import {
  Formik,
  Form,
  // ErrorMessage,
} from 'formik'
import {
  Button,
} from '@material-ui/core';
import * as Async from '../redux/async/blockchain'
import WalletTextField from './../layouts/form/WalletTextField'
import SendDialogButton from './../layouts/dialog/SendDialogButton'
import Clipboard from "clipboard"

export default function Container () {
  function Wallet () {
    return (
      <Formik
        // enableReinitialize={ true } :TODO: ???
        initialValues={
          initialValues
        }
        validationSchema={
          Yup.object(
            {
              recipient_address: Yup.string().required( "Required" ),
              value: Yup.number().positive().required( "Required" )
            }
          )
        }
        onSubmit={ ( values, { setSubmitting } ) => {
          _handleSubmit( values )
          setSubmitting( false )
          // values.recipientAddress = '' :TODO: Clear
          // values.value = ''
        } }
      >
        { ( { isSubmitting, isValid, values, touched, errors } ) => (
          <Form>
            <WalletTextField
              name="sender_priv_key"
              label="Private Key"
              type="text"
              placeholder="Private Key"
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <WalletTextField
              name="sender_pub_key"
              label="Public Key"
              type="text"
              placeholder="Public Key"
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <WalletTextField
              name="sender_address"
              label="Address"
              type="text"
              placeholder="Address"
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <WalletTextField
              name="recipient_address"
              label="Address"
              type="text"
              placeholder="Address"
              required
              fullWidth
              margin="normal"
              error={ ( touched.recipient_address && !values.recipient_address ) || errors.recipient_address }
            />
            <WalletTextField
              name="value"
              label="Amount"
              type="text"
              placeholder="Amount"
              required
              fullWidth
              margin="normal"
              error={ ( touched.value && !values.value ) || errors.value }
            />
            {/* :FIXME: Validation Error */ }
            <SendDialogButton
              type="submit"
              variant="outlined"
              color="primary"
              size="large"
              disabled={ !isValid || isSubmitting }
            />
            {/* <Button
              type="submit"
              variant="outlined"
              color="primary"
              disabled={ !isValid || isSubmitting }
            >
              Submit
            </Button> */}
            <Button
              type="button"
              variant="outlined"
              color="secondary"
              size="large"
              component={ ReactRouter.Link }
              to="/"
            >
              Cancel
            </Button>
            <WalletTextField
              name="bob_priv_key"
              label="Private Key"
              type="text"
              placeholder="Private Key"
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <WalletTextField
              name="bob_pub_key"
              label="Public Key"
              type="text"
              placeholder="Public Key"
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <WalletTextField
              name="bob_address"
              label="Address"
              type="text"
              placeholder="Address"
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <Button
              data-clipboard-text={ bob.address }
              className="btn"
              type="button"
              variant="outlined"
              color="default"
              size="large"
              // disabled={ !isValid || isSubmitting }
            >
              Copy
            </Button>
            {/* <button className="btn" data-clipboard-text={ bob.address }>COPY :)</button> */}
          </Form>
        ) }
      </Formik>
    )
  }

  new Clipboard( '.btn' )
  const dispatch = ReactRedux.useDispatch()
  const selector = ReactRedux.useSelector( state => state.blockchain.wallet )
  const _handleSubmit = React.useCallback( ( values ) => {
    dispatch( Async.asyncSendMoney( values ) )
  }, [ dispatch ] )
  React.useEffect( () => {
    dispatch( Async.asyncGetWallet() )
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
    sender_priv_key: alice.priv_key,
    sender_pub_key: alice.pub_key,
    sender_address: alice.address,
    bob_priv_key: bob.priv_key,
    bob_pub_key: bob.pub_key,
    bob_address: bob.address,
    // recipient_address: '',
    // value: '' :TODO: ???
  }
  return <Wallet />
}