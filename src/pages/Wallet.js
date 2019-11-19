import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import Button from '@material-ui/core/Button';
import * as Async from '../redux/async/blockchain'
import WalletTextField from './../layouts/form/WalletTextField'
import SendDialogButton from './../layouts/dialog/SendDialogButton'
import LinearQuery from './../layouts/form/LinearQuery'
import Clipboard from "clipboard"
import Box from '@material-ui/core/Box'


export default function C () {
  function Wallet () {
    return (
      <Box ml={ 2 } mr={ 2 }>
        <Formik
          initialValues={
            initialValues
          }
          validationSchema={
            Yup.object().shape(
              {
                recipient_address: Yup.string()
                  .required( "Recipient Address is a required field" ),
                value: Yup.number()
                  .positive()
                  .required( "Amount is a required field" )
              }
            )
          }
          onSubmit={ ( values, { setSubmitting } ) => {
            _handleSubmit( values )
            setSubmitting( false )
          } }
        >
          { ( { isSubmitting, isValid, values, touched, errors, handleSubmit } ) => (
            <Form>
              <WalletTextField
                name="sender_priv_key"
                label="Sender Private Key"
                type="text"
                placeholder="Private Key"
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <WalletTextField
                name="sender_pub_key"
                label="Sender Public Key"
                type="text"
                placeholder="Public Key"
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <WalletTextField
                name="sender_address"
                label="Sender Address"
                type="text"
                placeholder="Address"
                fullWidth
                variant="outlined"
                margin="normal"
              />
              {
                !selector[ 0 ] && <LinearQuery />
              }
              <WalletTextField
                name="recipient_address"
                label="Recipient Address"
                type="text"
                placeholder="Address"
                required
                fullWidth
                margin="normal"
                error={
                  touched.recipient_address && ( !values.recipient_address || errors.recipient_address )
                }
              />
              <WalletTextField
                name="value"
                label="Amount (BTC)"
                type="text"
                placeholder="Amount (BTC)"
                required
                fullWidth
                margin="normal"
                error={ touched.value && ( !values.value || errors.value ) }
              />
              <Box textAlign="center">
                <SendDialogButton
                  type="button"
                  size="large"
                  disabled={ !touched.value || !isValid || isSubmitting }
                  handleSubmit={ handleSubmit }
                />
              </Box>
              <WalletTextField
                name="bob_priv_key"
                label="Recipient Private Key"
                type="text"
                placeholder="Private Key"
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <WalletTextField
                name="bob_pub_key"
                label="Recipient Public Key"
                type="text"
                placeholder="Public Key"
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <WalletTextField
                name="bob_address"
                label="Recipient Address"
                type="text"
                placeholder="Address"
                fullWidth
                variant="outlined"
                margin="normal"
              />
              {
                !selector[ 1 ] && <LinearQuery />
              }
              <Box mt={ 1 }>
                <Button
                  data-clipboard-text={ bob.address }
                  className="btn"
                  type="button"
                  variant="outlined"
                  color="default"
                  size="medium"
                >
                  ADDR COPY
              </Button>
              </Box>
            </Form>
          ) }
        </Formik>
      </Box>
    )
  }

  // Clipboard.js => Address Copy
  new Clipboard( '.btn' )

  // Axios GET /wallet => Wallet Data
  const dispatch = useDispatch()
  const selector = useSelector( state => state.blockchain.wallet )
  React.useEffect( () => {
    dispatch( Async.asyncGetWallet() )
  }, [ dispatch ] )

  // Wallet Data => State
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

  // State => Form Initial Values
  const initialValues = {
    sender_priv_key: alice.priv_key,
    sender_pub_key: alice.pub_key,
    sender_address: alice.address,
    bob_priv_key: bob.priv_key,
    bob_pub_key: bob.pub_key,
    bob_address: bob.address,
    recipient_address: "",
    value: ""
  }

  // Submit Form Data
  const _handleSubmit = React.useCallback( ( values ) => {
    dispatch( Async.asyncSendMoney( values ) )
  }, [ dispatch ] )

  return <Wallet />
}


// { selector: Array( 2 ) }
// selector: Array( 2 )
// 0:
// address: "VAJfKcgCfmtFTeK7o3nURWQk18t3RoibSf"
// priv_key: "Lzhp9LopCHc5baafRVrffRsdjvHq89ZZKYAftuU4DtouF7T9sYjAJrBnVf7ZskfpGrHNQCd2KFyUsLJEtNoGgNGPJyaWt45aaAESN5DhmdGRCX2s3FzuUauumkiHANkL8TWXmeR1i4g5qwhA4LEDJGdxxS8t5A49z"
// pub_key: "PZ8Tyr4Nx8MHsRAGMpZmZ6TWY63dXWSCyDaiKS5fSGUQS8Eh8kFP4mZWBoEcA83BFo3j6v44irm5T2ttgV65UmRTnGxnjzbTQsh4MMWSpdYvWeunNYKe9HJL"
// __proto__: Object
// 1:
// address: "gYQJW2D2RhiCvDUsVQioTXLDEAkqwccu9R"
// priv_key: "Lzhp9LopCCVE7eG3FtcDW1oSzKWmo1tG46vgdmsC5eKd1XGF3Rjxi1bUfnoZTi512YR2FW2Af28SFbjhWGGa3ErrLd78PNdVqvmSKttVvLXGFYqMJSLhABhEjdzvuEBNPo93Dxnxsi3z8Ga3ZkrTi9GDiWrTP1Xy9"
// pub_key: "PZ8Tyr4Nx8MHsRAGMpZmZ6TWY63dXWSCxxJyh5TWLNMppcDDRYLwL9ekisD9NP6dqxYE9WEfYGoPxwL35UGQWrCmT6FzaTBFAC285NhbdtTEy3GiD4oLdY3q"
// __proto__: Object