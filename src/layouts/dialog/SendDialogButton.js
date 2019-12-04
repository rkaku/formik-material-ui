import React from "react";
import Button from "@material-ui/core/Button";
import SubmitButton from "./../buttons/SubmitButton";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";

export default function SendDialogButton({
  disabled,
  handleSubmit,
  size,
  type,
}) {
  const props = { disabled, size, type };
  const [open, setOpen] = React.useState(false);

  const _handleSubmit = () => {
    setOpen(false);
    handleSubmit();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SubmitButton {...props} onClick={handleClickOpen}></SubmitButton>

      {/* Confirmation Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='draggable-dialog-title'
      >
        <DialogTitle style={{ cursor: "move" }} id='draggable-dialog-title'>
          CONFIRMATION
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to send ?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color='primary'>
            NO
          </Button>
          <Button type='submit' onClick={_handleSubmit} color='primary'>
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

SendDialogButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

// { disabled: true, size: "large", type: "submit", handleSubmit: ƒ }
// disabled: true
// handleSubmit: ƒ()
// size: "large"
// type: "submit"
