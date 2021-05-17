import { ADD_TODO_ITEM, ACTION_2 } from "../actions/action"

export function addToDoItem(value) {
    return { 
        type: ADD_TODO_ITEM,
        newToDoItem: value
    };
}