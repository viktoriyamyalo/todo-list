import { TITLE_CHANGE, TEXT_CHANGE, TODO_CREATE_SUCCESS } from "../actions/types";

const INITIAL_STATE = { title: '', text: ''};

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case TITLE_CHANGE:
            return {...state, title: action.payload}
        case TEXT_CHANGE:
            return {...state, text: action.payload}
        case TODO_CREATE_SUCCESS: {
            return {...INITIAL_STATE}
        }
        default:
            return state;
    }
}