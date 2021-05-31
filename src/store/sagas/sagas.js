import { takeEvery, put, call } from "redux-saga/effects";

import {
  fetchBoards,
  addNewBoard,
  fetchLists,
  addNewList,
} from "../../api/api";
import {
  putBoards,
  joinNewBoard,
  addIdToNewBoard,
  putLists,
  showMessage,
  loadBoards,
} from "../actionCreators/actionCreator";
import {
  LOAD_BOARDS,
  ADD_NEW_BOARD,
  LOAD_LISTS,
  ADD_NEW_LIST,
} from "../actions/action";

function* workerLoadBoards() {
  const boardList = yield call(fetchBoards);
  yield put(putBoards(boardList));
}

export function* watchLoadBoards() {
  yield takeEvery(LOAD_BOARDS, workerLoadBoards);
}

function* workerAddBoard(action) {
  const mewBoardId = yield call(addNewBoard, action.newBoardData);
  yield put(addIdToNewBoard(mewBoardId));
  yield put(joinNewBoard());
}

export function* watchAddBoard() {
  yield takeEvery(ADD_NEW_BOARD, workerAddBoard);
}

function* workerLoadLists() {
  const data = yield call(fetchLists);
  yield put(putLists(data));
}

export function* watchLoadLists() {
  yield takeEvery(LOAD_LISTS, workerLoadLists);
}

function* workerAddList() {
  const data = yield call(addNewList);
  yield put(putLists(data));
}

export function* watchAddList() {
  yield takeEvery(ADD_NEW_LIST, workerAddList);
}
