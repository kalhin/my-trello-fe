import { applyMiddleware } from 'redux';
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga"
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { watchLoadBoards, watchAddBoard,  watchLoadLists, watchAddList } from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(watchLoadBoards);
sagaMiddleware.run(watchLoadLists);
sagaMiddleware.run(watchAddList);
sagaMiddleware.run(watchAddBoard);

export default store;