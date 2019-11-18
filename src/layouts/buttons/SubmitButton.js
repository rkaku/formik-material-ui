import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import SendOutlined from '@material-ui/icons/SendOutlined'
// import AttachMoneyOutlined from '@material-ui/icons/AttachMoneyOutlined'


const useStyles = makeStyles( theme => ( {
  fab: {
    margin: theme.spacing( 1 ),
  },
  extendedIcon: {
    marginRight: theme.spacing( 1 ),
  },
} ) );

export default function FloatingActionButtons ( props ) {
  const classes = useStyles();

  return (
    <div>
      <Fab { ...props } variant="extended" aria-label="submit" className={ classes.fab }>
        <SendOutlined className={ classes.extendedIcon } />
        SEND MONEY
      </Fab>
    </div>
  );
}