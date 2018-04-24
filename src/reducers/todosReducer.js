import { TODOS_FETCH_SUCCESS, TODO_FETCH_SUCCESS, TODOS_SEARCH, TODOS_FETCH_START } from "../actions/types";

const INITIAL_STATE = {todos: [], currentTodo: null, filteredTodos: [], loading: false};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TODOS_FETCH_START:
            return {...state, loading: true}
        case TODOS_FETCH_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case TODO_FETCH_SUCCESS:
            return {...state, currentTodo: action.payload}
        case TODOS_SEARCH:
            return {...state, filteredTodos: action.payload}
        default: 
            return state;
    }
}