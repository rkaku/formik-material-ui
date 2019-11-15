import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined'


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
      <Fab { ...props } variant="extended" aria-label="mine" className={ classes.fab }>
        <PetsOutlinedIcon className={ classes.extendedIcon } />
        START MINING
      </Fab>
    </div>
  );
}