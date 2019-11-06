import './../App.css'
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
import { asyncCreateEvent } from './../redux/async/events'


export default function Container () {
  function EventsIndex () {
    return (
      <Formik
        initialValues={
          {
            title: "",
            body: ""
          }
        }
        validationSchema={
          Yup.object(
            {
              title: Yup.string()
                .required( "Required" ),
              body: Yup.string()
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
              name="title"
              label="Title"
              type="text"
              placeholder="Title"
              component={ TextField }
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <Field
              name="body"
              label="Body"
              type="text"
              placeholder="Body"
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
  return <EventsIndex />
}