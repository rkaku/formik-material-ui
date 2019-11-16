import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


const ColorLinearProgress = withStyles( {
  colorPrimary: {
    backgroundColor: 'transparent',
  },
  barColorPrimary: {
    // backgroundColor: '#ff8e53',
    // backgroundColor: '#fe6b8b',
    // backgroundColor: '#ff8c00',
    // backgroundColor: '#8b0000',
    backgroundColor: '#09d3ac',


  },
} )( LinearProgress );

const useStyles = makeStyles( theme => ( {
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing( 0 ),
    },
  },
} ) );

export default function CustomizedProgressBars () {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <ColorLinearProgress variant="query" className={ classes.margin } />
    </div>
  );
}