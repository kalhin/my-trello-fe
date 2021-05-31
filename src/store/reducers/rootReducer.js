import { combineReducers } from "redux";

import boardReducer from "./boardReducer";
import listReducer from "./listReducer";
import notificationReducer from "./notificationReducer";

const rootReducer = combineReducers({  
  boardReducer,
  listReducer,
  notificationReducer
})

export default rootReducer;
