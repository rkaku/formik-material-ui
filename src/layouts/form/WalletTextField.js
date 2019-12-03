import React from "react";
import TextField from "@material-ui/core/TextField";
import { useField } from "formik";
import PropTypes from "prop-types";

export default function WalletTextField(props) {
  const [field, meta] = useField(props);
  return (
    <>
      <TextField {...field} {...props} />
      {meta.error && meta.touched && (
        <small style={{ color: "darkred" }}>{meta.error}</small>
      )}
    </>
  );
}

WalletTextField.propTypes = {
  props: PropTypes.shape({
    error: PropTypes.string,
    fillWidth: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    margin: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.bool,
    type: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
  }),
};

// { props: { … } }
// props:
// fullWidth: true
// label: "Sender Private Key"
// margin: "normal"
// name: "sender_priv_key"
// placeholder: "Private Key"
// type: "text"
// variant: "outlined"

// { props: { … } }
// props:
// error: undefined
// fullWidth: true
// label: "Recipient Address"
// margin: "normal"
// name: "recipient_address"
// placeholder: "Address"
// required: true
// type: "text"

// field

// { field: { … } }
// field:
// name: "sender_priv_key"
// onBlur: ƒ( eventOrString )
// onChange: ƒ( eventOrPath )
// value: ""

// meta

// { meta: { … } }
// meta:
// error: undefined
// initialError: undefined
// initialTouched: false
// initialValue: ""
// touched: false
// value: ""

// { meta: { … } }
// meta:
// error: undefined
// initialError: undefined
// initialTouched: false
// initialValue: "2fK4ztZaoviYcNjfwdKJigJze1WFQmrvpby"
// touched: false
// value: "2fK4ztZaoviYcNjfwdKJigJze1WFQmrvpby"
