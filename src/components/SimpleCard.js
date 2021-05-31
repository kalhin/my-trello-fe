import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { ROUTES } from "../constants/routes"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    cursor: "pointer",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const history = useHistory();

  const { id, title = "", description = "" } = props;
  const classes = useStyles();

  const handleOpenBoard = () => {
    console.log("open", id);
    history.push({pathname: `${ROUTES.BOARD}`, search: `?id=${id}`})
  };

  return (
    <Card className={classes.root} onClick={handleOpenBoard}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
