import {
  PUT_BOARDS,
  ADD_NEW_BOARD,
  JOIN_NEW_BOARD,
  ADD_ID_TO_NEW_BOARD,
} from "../actions/action";
import initialState from "../initialState";

export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case PUT_BOARDS:
      return {
        ...state,
        boards: action.boards,
      };

    case ADD_NEW_BOARD:
      return {
        ...state,
        newBoard: {
          name: action.newBoardData.name,
          description: action.newBoardData.description,
        },
      };

    case ADD_ID_TO_NEW_BOARD:
      return {
        ...state,
        newBoard: { ...state.newBoard, ...{ id: action.newBoardId } },
      };

    case JOIN_NEW_BOARD:
      return {
        ...state,
        boards: [...state.boards, state.newBoard],
      };

    default:
      return state;
  }
}
