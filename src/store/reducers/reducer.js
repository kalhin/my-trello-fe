import { ADD_TODO_ITEM, ACTION_2 } from "../actions/action"
import initialState from "../initialState"

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO_ITEM: return { value: action.value_1 };
        case ACTION_2: return { value: action.value_2 };
        
        default: return state;
    }
}