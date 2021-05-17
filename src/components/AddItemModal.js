import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AddItemModal(props) {
  const { openModal, handleClose, handleSave, description, label, close, ok } =
    props;

  const [name, setName] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSaveName = () => {
    handleSave(name);
    setName("");
  };

  return (
    <div>
      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          {description ? (
            <DialogContentText>{description}</DialogContentText>
          ) : (
            ""
          )}
          <TextField
            autoFocus
            margin="dense"
            label={label}
            type="text"
            value={name}
            onChange={handleChangeName}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {close}
          </Button>
          <Button onClick={handleSaveName} color="primary">
            {ok}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
