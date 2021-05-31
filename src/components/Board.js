import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

import { TextField } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";

import Cards from "./Cards";
import AddButton from "./AddButton";

import { BOARD } from "../constants/constants";
import { loadToDos, addToDo } from "../store/actionCreators/actionCreator";
import "../styles/_material-overriding.scss";

function Board({ lists }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadToDos());
  }, []);

  const [addBoard, setAddBoardField] = useState(false);
  const [newToDoName, setNewToDoName] = useState("");

  const handleClick = () => {
    setAddBoardField(true);
  };

  // const handleCloseModal = () => {
  //   setOpenAddBoardModal(false);
  // };

  const handleSaveName = (e) => {
    e.preventDefault();
    console.log("newToDoName", newToDoName, !!newToDoName);
    if (newToDoName) {
      dispatch(addToDo(newToDoName));
    }
    setAddBoardField(false);
  };

  const printLists = lists.map((item) => (
    <li className="board__item" key={item.id}>
      <Cards item={item} title={item.name} cards={item.cards} />
    </li>
  ));

  return (
    <StylesProvider injectFirst>
      <div className="board">
        <ul className="board__listItems">
          {printLists}
          {addBoard ? (
            <form onSubmit={handleSaveName}>
              <TextField
                variant="outlined"
                autoFocus
                fullWidth
                onBlur={handleSaveName}
                onInput={(e) => setNewToDoName(e.target.value)}
              />
            </form>
          ) : (
            <AddButton
              onClick={handleClick}
              buttonText={BOARD.BUTTONS.ADD_BOARD}
              margin="10px"
              backgroundColor="#d8d8d8"
              width="300px"
            />
          )}
        </ul>
      </div>
    </StylesProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
  };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//     }
// }

export default connect(mapStateToProps, null)(Board);
