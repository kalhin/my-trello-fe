import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function Notification({ message }) {
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick(TransitionUp)}>Up</Button>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        TransitionComponent={transition}
        message={message}
        key={transition ? transition.name : ""}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    message: state.message,
  };
};

export default connect(mapStateToProps, null)(Notification);
