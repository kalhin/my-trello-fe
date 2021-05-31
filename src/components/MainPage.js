import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

import { TextField } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";

import SimpleCard from "./SimpleCard";
import AddButton from "./AddButton";

import { MAIN_PAGE } from "../constants/constants";
import { loadBoards, addNewBoard } from "../store/actionCreators/actionCreator";
import "../styles/_material-overriding.scss";

function MainPage({ boards }) {
  const dispatch = useDispatch();
  const inputNaneRef = useRef();

  useEffect(() => {
    dispatch(loadBoards());
  }, []);

  const [addBoard, setAddBoardField] = useState(false);
  const [newBoardName, setNewBoardName] = useState("");
  const [newBoardDescription, setNewBoardDescription] = useState("");
  const [isNameFieldNotValid, setIsNameFieldNotValid] = useState(false);

  const handleCreateBoard = () => {
    setAddBoardField(true);
  };

  const handleChangeName = (e) => {
    const boardName = e.target.value;
    setNewBoardName(boardName);
    if (MAIN_PAGE.INPUTS.REGEX.REGEX_NAME.test(newBoardName)) {
      setIsNameFieldNotValid(false);
    } else {
      setIsNameFieldNotValid(true);
    }
  };

  const handleSaveNewBoardData = (e) => {
    e.preventDefault();

    if (newBoardName && !isNameFieldNotValid) {
      setIsNameFieldNotValid(false);
      dispatch(addNewBoard(newBoardName, newBoardDescription));
      setNewBoardName("");
      setNewBoardDescription("");
      setAddBoardField(false);
    } else {
      setIsNameFieldNotValid(true);
      inputNaneRef.current.focus();
    }
  };

  const cancelAddingBoard = () => {
    setAddBoardField(false);
  };

  const printBoards = boards.map((board) => (
    <li className="board__item" key={board.id}>
      <SimpleCard
        id={board.id}
        title={board.name}
        description={board.description}
      />
    </li>
  ));

  return (
    <StylesProvider injectFirst>
      <div className="board">
        <ul className="board__listItems">
          {printBoards}
          {isNameFieldNotValid}
          {addBoard ? (
            <form type="submit" onSubmit={handleSaveNewBoardData}>
              <TextField
                inputRef={inputNaneRef}
                type="string"
                variant="outlined"
                error={isNameFieldNotValid}
                value={newBoardName}
                helperText={
                  isNameFieldNotValid
                    ? MAIN_PAGE.INPUTS.ERRORS.INCORECT_NAME
                    : ""
                }
                label={MAIN_PAGE.INPUTS.LABELS.NAME}
                placeholder={MAIN_PAGE.INPUTS.PLACEHOLDERS.ENTER_NAME}
                autoFocus
                onChange={handleChangeName}
              />
              <TextField
                type="string"
                variant="outlined"
                label={MAIN_PAGE.INPUTS.LABELS.DESCRIPTION}
                placeholder={MAIN_PAGE.INPUTS.PLACEHOLDERS.ENTER_DESCRIPTION}
                onChange={(e) => setNewBoardDescription(e.target.value)}
              />
              <button type="submit">{MAIN_PAGE.BUTTONS.CREATE_BOARD}</button>
              <button onClick={cancelAddingBoard}>
                {MAIN_PAGE.BUTTONS.CLOSE}
              </button>
            </form>
          ) : (
            <AddButton
              onClick={handleCreateBoard}
              buttonText={MAIN_PAGE.BUTTONS.ADD_BOARD}
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
    boards: state.boardReducer.boards,
  };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//     }
// }

export default connect(mapStateToProps, null)(MainPage);
