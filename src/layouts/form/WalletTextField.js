import React from 'react'
import TextField from '@material-ui/core/TextField'
import { useField } from 'formik';
// import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles( theme => ( {
//   root: {
//     marginBottom: theme.spacing( 0 ),
//   },
// } ) );

export default function WalletTextField ( { ...props } ) {
  const [ field, meta ] = useField( props )
  // const classes = useStyles();
  return (
    <TextField
      // className={ classes.margin }
      { ...field }
      { ...props }
    />
    // { meta.error && meta.touched && <small>{ meta.error }</small> }
  )
}