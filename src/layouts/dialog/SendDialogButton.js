import React from 'react';
import Button from '@material-ui/core/Button';
import SubmitButton from './../buttons/SubmitButton'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import Paper from '@material-ui/core/Paper';
// import Draggable from 'react-draggable';


// function PaperComponent ( props ) {
//   return (
//     <Draggable cancel={ '[class*="MuiDialogContent-root"]' }>
//       <Paper { ...props } />
//     </Draggable>
//   );
// }
export default function DraggableDialog ( props ) {
  const [ open, setOpen ] = React.useState( false );

  const _handleSubmit = () => {
    setOpen( false )
  }

  const handleClickOpen = () => {
    setOpen( true )
  };

  const handleClose = () => {
    setOpen( false )
  };
  return (
    <>
      <SubmitButton
        { ...props }
        onClick={ handleClickOpen }
      >
        {/* SEND BTC */}
      </SubmitButton>
      {/* <Button
        { ...props }
        // variant="outlined"
        // color="primary"
        onClick={ handleClickOpen }
      >
        SUBMIT
      </Button> */}
      <Dialog
        open={ open }
        onClose={ handleClose }
        // PaperComponent={ PaperComponent }
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={ { cursor: 'move' } } id="draggable-dialog-title">
          CONFIRMATION :)
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to send ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={ handleClose } color="primary">
            NO
          </Button>
          <Button onClick={ _handleSubmit } color="primary">
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}


