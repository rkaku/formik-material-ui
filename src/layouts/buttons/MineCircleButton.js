import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fade from '@material-ui/core/Fade'
// import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
// import Fab from '@material-ui/core/Fab'
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined'
import MineButton from './MineButton'
// import { useSnackbar } from 'notistack';


const useStyles = makeStyles( theme => ( {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  // button: {
  //   margin: theme.spacing( 2 ),
  // },
  placeholder: {
    height: 100,
    margin: theme.spacing( 1 ),
  },
  fab: {
    margin: theme.spacing( 1 ),
  },
  extendedIcon: {
    marginRight: theme.spacing( 1 ),
  },
} ) );


export default function DelayingAppearance ( props ) {
  const classes = useStyles();
  const [ query, setQuery ] = React.useState( 'idle' );
  const timerRef = React.useRef();
  // const { enqueueSnackbar } = useSnackbar();

  React.useEffect(
    () => () => {
      clearTimeout( timerRef.current );
    },
    [],
  );
  const handleClickQuery = () => {
    props.onClick()
    clearTimeout( timerRef.current );

    if ( query !== 'idle' ) {
      setQuery( 'idle' );
      return;
    }

    setQuery( 'progress' );
    timerRef.current = setTimeout( () => {
      setQuery( 'success' );
    }, 6789 );
  };

  // const handleClickVariant = variant => () => {
    // variant could be success, error, warning, info, or default
    // enqueueSnackbar( 'OK! You mined it successfully. :)', { variant } );
  // };

  return (
    <div className={ classes.root }>
      {/* <div className={ classes.placeholder }>
        { query === 'success' ? (
          <Typography>Success!</Typography>
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
      </div> */}
      <MineButton
        // { ...props }
        variant="extended"
        aria-label="mine"
        className={ classes.fab }
        onClick={ handleClickQuery }
      // className={ classes.button }
      >
        <PetsOutlinedIcon className={ classes.extendedIcon } />
        { query !== 'idle' ? 'Now Mining...' : 'Start Mining' }
      </MineButton>
      <div className={ classes.placeholder }>
        { query === 'success' ?
          // handleClickVariant( 'success' )
          (
          <Typography>SUCCESS :)</Typography>
          )
          : (
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
  );
}
