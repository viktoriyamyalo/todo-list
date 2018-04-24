import { SEARCH_TERM_CHANGE, TOGGLE_COMPLETE } from "../actions/types";

const INITIAL_STATE = { searchTerm: '', toggleComplete: false };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SEARCH_TERM_CHANGE:
            return {...state, searchTerm: action.payload}
        case TOGGLE_COMPLETE:
            return {...state, toggleComplete: action.payload}
        default:
            return state;
    }
}