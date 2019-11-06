import React from 'react'
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
import './../App.css'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
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
          handleSubmit( values )
          setSubmitting( false )
        } }
      >
        { ( { isSubmitting } ) => (
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
              disabled={ isSubmitting }
            >
              Submit
            </Button>
            <Button
              type="button"
              variant="outlined"
              color="secondary"
              component={ Link }
              to="/"
            >
              Cancel
            </Button>
          </Form>
        ) }
      </Formik>
    )
  }

  const dispatch = useDispatch()
  const handleSubmit = React.useCallback( ( values ) => {
    dispatch( asyncCreateEvent( values ) )
  }, [ dispatch ] )
  return <EventsIndex />
}