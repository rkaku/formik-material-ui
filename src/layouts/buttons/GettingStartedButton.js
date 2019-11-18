/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import Fab from '@material-ui/core/Fab'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'


const useStyles = makeStyles( theme => ( {
  margin: {
    margin: theme.spacing( 1 ),
  },
} ) );

export default function EmotionCSS ( props ) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Fab
        { ...props }
        css={ css`
          font-size: calc(10px + 1.4vmin);
          position: absolute;
          top: 80%;
          left: 17%;
          -ms-transform: translate(-50%,-50%);
          -webkit-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%);
          background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
          border-radius: 3px;
          border: 0;
          color: white;
          height: 55px;
          padding: 0 14px;
          box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
          & .MuiButton-label {
            color: papayawhip;
          }
        `}
        variant="extended"
        size="large"
        color="primary"
        aria-label="add"
        className={ classes.margin }
        component={ Link }
      >
        Getting Started
        </Fab>
    </React.Fragment>
  );
}