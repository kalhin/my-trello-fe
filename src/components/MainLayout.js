import React, { useState, useEffect } from "react";
import store from "../store/store";
import { addToDoItem } from "../store/actionCreators/actionCreator";
import { ADD_TODO_ITEM } from "../store/actions/action";

import { TextField } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";

import "../styles/material-overriding.scss";
import ListItem from "./ListItem";
import { items, newItem } from "../data/data";
import AddButton from "./AddButton";
import AddItemModal from "./AddItemModal";
import Draggable, { DraggableCore } from "react-draggable";
import { BOARD } from "../constants/constants";
import { getTodos } from "../api/api";
import Loader from "./Loader";

export default function MainLayout() {
  useEffect(async () => {
    setShowLoader(true);
    const toDosList = await getTodos();
    setShowLoader(false);
    setBoard(toDosList);
  }, []);

  const [boardListItems, setBoard] = useState([]);
  const [addBoard, setAddBoardField] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleClick = () => {
    setAddBoardField(true);
  };

  const handleCloseModal = () => {
    setOpenAddBoardModal(false);
  };

  const handleSaveName = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const newToDoItem = {
      id: new Date().getMilliseconds(),
      title: name,
      label: "",
      cards: [],
    };
    // store.dispatch(addToDoItem(newToDoItem));
    // setOpenAddBoardModal(false);
    // console.log(store.getState().toDosList)
    setAddBoardField(false);
  };

  const boardItem = boardListItems.map((item) => (
    <li className="board__item" key={item.id}>
      <ListItem item={item} title={item.title} cards={item.cards} />
    </li>
  ));

  return (
    <StylesProvider injectFirst>
      {showLoader ? <Loader /> : ""}
      <div className="board">
        <ul className="board__listItems">
          {boardItem}
          {addBoard ? (
            <form onSubmit={handleSaveName}>
              <TextField
                variant="outlined"
                autoFocus
                fullWidth
                onBlur={handleSaveName}
              />
            </form>
          ) : (
            ""
          )}
          <AddButton
            onClick={handleClick}
            buttonText={BOARD.BUTTONS.ADD_BOARD}
          />
        </ul>
        {/* <AddItemModal
        openModal={openAddBoardModal}
        title={BOARD.TITLES.ADD_BOARD_MODAL}
        label={BOARD.INPUTS.ADD_BOARD_LABEL}
        close={BOARD.BUTTONS.ADD_BOARD_CANCEL}
        ok={BOARD.BUTTONS.ADD_BOARD_OK}
        handleClose={handleCloseModal}
        handleSave={handleSaveName}
      /> */}
      </div>
    </StylesProvider>
  );
}
