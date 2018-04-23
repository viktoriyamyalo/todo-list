import { TODOS_FETCH_SUCCESS } from "../actions/types";

const INITIAL_STATE = {todos: []};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TODOS_FETCH_SUCCESS:
            return {...state, todos: action.payload}
        default: 
            return state;
    }
}