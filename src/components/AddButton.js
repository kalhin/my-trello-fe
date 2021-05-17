import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Add from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: 10,
    minWidth: 275
  },
}));

export default function AddButton(props) {
  const { buttonText, onClick } = props;
  
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<Add />}
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </div>
  );
}