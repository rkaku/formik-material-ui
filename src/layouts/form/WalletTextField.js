import React from 'react'
import TextField from '@material-ui/core/TextField'
import { useField, useFormikContext } from 'formik';


export default function WalletTextField ( { ...props } ) {
  const [ field, meta ] = useField( props )
  // const { setFieldValue } = useFormikContext()
  // const _onChange = React.useCallback( ( event ) => {
  //   setFieldValue(
  //     field.name, event.target.value
  //     // field.name, meta.initialValue ? meta.initialValue : event.target.value
  //   )
  // }, [ field.name, setFieldValue ] )
  return (
      <TextField
        // onChange={ _onChange }
        { ...field }
        { ...props }
      />
      // { meta.error && meta.touched && <small>{ meta.error }</small> }
  )
}