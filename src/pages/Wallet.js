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
} from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/styles'
import styled from 'styled-components'
import { asyncCreateEvent } from '../redux/async/events'


export default function Container () {
  function Wallet () {
    return (
      <Formik
        initialValues={
          {
            privateKey: "",
            publicKey: "",
            amount: ""
          }
        }
        validationSchema={
          Yup.object(
            {
              privateKey: Yup.string()
                .required( "Required" ),
              publicKey: Yup.string()
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
        { ( { isSubmitting, isValid } ) => (
          <Form>
            <Field
              name="privateKey"
              label="Private Key"
              type="text"
              placeholder="Private Key"
              component={ TextField }
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <Field
              name="publicKey"
              label="Public Key"
              type="text"
              placeholder="Public Key"
              component={ TextField }
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <Field
              name="amount"
              label="Amount"
              type="text"
              placeholder="Amount"
              component={ TextField }
              fullWidth
              variant="outlined"
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
          </Form>
        ) }
      </Formik>
    )
  }

  const history = ReactRouter.useHistory()
  const dispatch = ReactRedux.useDispatch()
  const _handleSubmit = React.useCallback( ( values ) => {
    dispatch( asyncCreateEvent( values ) )
  }, [ dispatch ] )
  return <Wallet />
}