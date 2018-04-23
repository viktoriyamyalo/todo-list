import { TODOS_FETCH_SUCCESS, TODO_FETCH_SUCCESS, TODOS_SEARCH } from "../actions/types";

const INITIAL_STATE = {todos: [], currentTodo: null, filteredTodos: []};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TODOS_FETCH_SUCCESS:
            return {...state, todos: action.payload}
        case TODO_FETCH_SUCCESS:
            return {...state, currentTodo: action.payload}
        case TODOS_SEARCH:
            return {...state, filteredTodos: action.payload}
        default: 
            return state;
    }
}