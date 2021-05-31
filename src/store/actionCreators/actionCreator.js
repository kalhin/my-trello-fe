import {
  LOAD_BOARDS,
  PUT_BOARDS,
  ADD_NEW_BOARD,
  JOIN_NEW_BOARD,
  ADD_ID_TO_NEW_BOARD,
  PUT_LISTS,
  LOAD_LISTS,
  ADD_NEW_LIST,
  SHOW_MESSAGE,
  HIDE_MESSAGE,
} from "../actions/action";

export const loadBoards = () => {
  return {
    type: LOAD_BOARDS,
  };
};

export const putBoards = (fetchedData) => {
  return {
    type: PUT_BOARDS,
    boards: fetchedData,
  };
};

export const addNewBoard = (newBoardName, newBoardDescription) => {
  return {
    type: ADD_NEW_BOARD,
    newBoardData: {
      name: newBoardName,
      description: newBoardDescription
    }
  };
};

export const addIdToNewBoard = (newBoardId) => {
  return {
    type: ADD_ID_TO_NEW_BOARD,
    newBoardId: newBoardId
  };
};

export const joinNewBoard = () => {
  return {
    type: JOIN_NEW_BOARD
  };
};

export const putLists = (fetchedData) => {
  return {
    type: PUT_LISTS,
    lists: fetchedData,
  };
};

export const loadToDos = () => {
  return {
    type: LOAD_LISTS,
  };
};

export const addToDo = (listTitle) => {
  return {
    type: ADD_NEW_LIST,
    listTitle: listTitle,
  };
};

export const showMessage = (message) => {
  return {
    type: SHOW_MESSAGE,
    message: message
  };
};

export const hideMessage = () => {
  return {
    type: HIDE_MESSAGE,
    message: ""
  };
};
