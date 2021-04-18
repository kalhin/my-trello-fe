import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TodoItem from "./TodoItem"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#d8d8d8',
    margin: 10
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ListItem(props) {
  const classes = useStyles();

  const todoItem = props.cards.map((todo) => (
    <li className="board__item" key={todo.id}>
      <TodoItem title={todo.title} description={todo.description}/>
    </li>
  ));

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <ul>{todoItem}</ul>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}