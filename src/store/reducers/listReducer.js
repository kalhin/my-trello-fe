import {
    PUT_LISTS,
    ADD_NEW_LIST,
  } from "../actions/action";
  import initialState from "../initialState";
  
  export default function listReducer(state = initialState, action) {
    switch (action.type) {
      case PUT_LISTS:
        return {
          ...state,
          lists: action.lists,
        };
  
      case ADD_NEW_LIST:
        return {
          ...state,
        };
  
      default:
        return state;
    }
  }
  