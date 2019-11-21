import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
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

  const classes = useStyles()
  const [ query, setQuery ] = React.useState( 'idle' )
  const timerRef = React.useRef()
  const selector = useSelector( state => state.blockchain.mining )

  React.useEffect(
    () => () => {
      clearTimeout( timerRef.current )
    },
    [],
  )

  const [ isSuccess, setIsSuccess ] = React.useState()
  React.useMemo( () => {
    if ( selector === undefined ) return
    setIsSuccess( selector )
  }, [ selector ] )

  // Display Mining Results
  const handleSuccess = React.useCallback( () => {
    if ( isSuccess === true ) {
      return ( <Typography>SUCCESS ：）</Typography> )
    }
    if ( isSuccess === false ) {
      return ( <Typography>FAILED ：（</Typography> )
    }
    return null
  }, [ isSuccess ] )

  // On Click => Handle Button Label
  const handleClickQuery = () => {
    props.onClick()
    clearTimeout( timerRef.current )

    if ( query !== 'idle' ) {
      setQuery( 'idle' )
      return
    }
    // Button Label => Now Mining...
    setQuery( 'progress' )

    // Button Label Reset => Start Mining
    timerRef.current = setTimeout( () => {
      setQuery( 'idle' )
    }, 1234 )
  }

  return (
    <div className={ classes.root }>
      {/* Mine Button */ }
      <Fab
        variant="extended"
        aria-label="mine"
        className={ classes.fab }
        onClick={ handleClickQuery }
      >
        <PetsOutlinedIcon className={ classes.extendedIcon } />
        { query !== 'idle' ? 'Now Mining...' : 'Start Mining' }
      </Fab>

      {/* Mining Results */ }
      <div className={ classes.placeholder }>
        {
          handleSuccess()
        }
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