// import React from 'react';
// import Button from '@material-ui/core/Button'
// import Snackbar from '@material-ui/core/Snackbar'
// import Slide from '@material-ui/core/Slide'
// import MineButton from './MineButton'


// function SlideTransition ( props ) {
//   return <Slide { ...props } direction="up" />
// }

// export default function PositionedSnackbar ( { onClick } ) {
//   const [ state, setState ] = React.useState( {
//     open: false,
//   } )

//   const { open, Transition } = state;

//   const handleClick = Transition => () => {
//     setState( { open: true, Transition } )
//     onClick()
//   };

//   const handleClose = () => {
//     setState( { ...state, open: false } );
//   };

//   return (
//     <div>
//       <MineButton
//         type="button"
//         onClick={ handleClick( SlideTransition ) }
//       />
//       {/* <Button
//         type="button"
//         variant="outlined"
//         color="primary"
//         onClick={ handleClick( SlideTransition ) }>
//         Mine
//       </Button> */}
//       <Snackbar
//         open={ open }
//         onClose={ handleClose }
//         TransitionComponent={ Transition }
//         ContentProps={ {
//           'aria-describedby': 'message-id',
//         } }
//         message={ <span id="message-id">Now Mining...</span> }
//       />
//     </div>
//   );
// }