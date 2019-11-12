import React from 'react'
import TextField from '@material-ui/core/TextField'
import { useField } from 'formik';


export default function WalletTextField ( { name, ...props } ) {
  const [ field, meta ] = useField( props )
  return (
    <TextField
      { ...field }
      { ...props }
    />
  )
}