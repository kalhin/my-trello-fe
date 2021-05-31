import {
    SHOW_MESSAGE,
    HIDE_MESSAGE,
  } from "../actions/action";
  import initialState from "../initialState";
  
  export default function notificationReducer(state = initialState, action) {
    switch (action.type) {  
      case SHOW_MESSAGE:
        return {
          ...state,
          message: state.message,
        };
  
      case HIDE_MESSAGE:
        return {
          ...state,
          message: state.message,
        };
  
      default:
        return state;
    }
  }
  