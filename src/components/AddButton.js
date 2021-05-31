import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Add from '@material-ui/icons/Add';

export default function AddButton(props) {
  const { buttonText, onClick, width = '100%', margin = 0, backgroundColor = 'white' } = props;
  
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: margin,
      width: width,
      backgroundColor: backgroundColor
    },
  }));
  
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