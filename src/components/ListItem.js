import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import Tooltip from '@material-ui/core/Tooltip';

import TodoItem from "./TodoItem";
import DropDownMenu from "./DropDownMenu";
import { ITEMS } from "../constants/constants";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#d8d8d8",
    margin: 10,
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ListItem(props) {
  const { item, title, cards, updatedListItems } = props;

  const [currentItem, setCurrentItem] = useState(null);
  const [titleEditing, setTitleEditing] = useState(false);
  const classes = useStyles();

  const todoItem = cards.map((todo) => (
    <li className="board__item" key={todo.id}>
      <TodoItem title={todo.title} description={todo.description} />
    </li>
  ));

  const dragStartHandler = (e, item) => {
    console.log("start", item);
    setCurrentItem(item);
  };

  const dragLeaveHandler = (e) => {};

  const dragEndHandler = (e) => {};

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const dropHandler = (e, item) => {
    e.preventDefault();
    setCurrentItem();
  };

  const handleChangeTitle = () => {
    setTitleEditing(true);
  };

  const handleChangeName = (e) => {
    const value = e.target.value;
    console.log(value);
  };

  const handleBlurInput = (e) => {
    e.preventDefault();
    console.log("blur");
    setTitleEditing(false);
  };

  const handleSaveName = (e) => {
    e.preventDefault();
    console.log("save");
    setTitleEditing(false);
  };

  return (
    <Card
      onDragStart={(e) => dragStartHandler(e, item)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, item)}
      draggable={true}
      className={classes.root}
    >
      <CardContent className="card__content">
        {titleEditing ? (
          <form onSubmit={handleSaveName}>
            <TextField
              variant="outlined"
              autoFocus
              fullWidth
              defaultValue={title}
              onChange={handleChangeName}
              onBlur={handleBlurInput}
            />
          </form>
        ) : (
          <div>
            <Tooltip title={title} placement="bottom" enterDelay={500} leaveDelay={200}>
            <Typography
              className="card__title"
              variant="h5"
              component="h2"
              onClick={handleChangeTitle}
            >
              {title}
            </Typography>
            </Tooltip>
            <DropDownMenu options={ITEMS.OPTIONS} />
          </div>
        )}
        <ul>{todoItem}</ul>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
