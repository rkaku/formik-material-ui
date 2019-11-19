import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fade from '@material-ui/core/Fade'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined'
import PropTypes from 'prop-types'
import Fab from '@material-ui/core/Fab'


// { props: { … } }
// props:
// onClick: () => { … }
DelayingAppearance.propTypes = {
  props: PropTypes.shape( {
    onClick: PropTypes.func.isRequired,
  } )
}

export default function DelayingAppearance ( props ) {
  const classes = useStyles();
  const [ query, setQuery ] = React.useState( 'idle' );
  const timerRef = React.useRef();

  React.useEffect(
    () => () => {
      clearTimeout( timerRef.current );
    },
    [],
  )

  // On Click => Circular Progress
  const handleClickQuery = () => {
    props.onClick()
    clearTimeout( timerRef.current )

    if ( query !== 'idle' ) {
      setQuery( 'idle' )
      return
    }

    setQuery( 'progress' )
    timerRef.current = setTimeout( () => {
      setQuery( 'success' )
    }, 6789 )
  };

  return (
    <div className={ classes.root }>
      <Fab
        // { ...props }
        variant="extended"
        aria-label="mine"
        className={ classes.fab }
        onClick={ handleClickQuery }
      >
        <PetsOutlinedIcon className={ classes.extendedIcon } />
        { query !== 'idle' ? 'Now Mining...' : 'Start Mining' }
      </Fab>

      {/* Circular Progress */ }
      <div className={ classes.placeholder }>
        { query === 'success' ? (
          <Typography>SUCCESS ：）</Typography>
        ) : (
            <Fade
              in={ query === 'progress' }
              style={ {
                transitionDelay: query === 'progress' ? '1111ms' : '0ms',
              } }
              unmountOnExit
            >
              <CircularProgress />
            </Fade>
          ) }
      </div>
    </div>
  )
}


const useStyles = makeStyles( theme => ( {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  placeholder: {
    height: 14,
    margin: theme.spacing( 1 ),
  },
  fab: {
    margin: theme.spacing( 1 ),
  },
  extendedIcon: {
    marginRight: theme.spacing( 1 ),
  }
} ) )