import { TITLE_CHANGE, TEXT_CHANGE, TODO_CREATE_SUCCESS, TODO_CREATE_FAIL } from "../actions/types";

const INITIAL_STATE = { title: '', text: '', error: ''};

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case TITLE_CHANGE:
            return {...state, error: '', title: action.payload}
        case TEXT_CHANGE:
            return {...state, error: '', text: action.payload}
        case TODO_CREATE_SUCCESS: {
            return {...INITIAL_STATE}
        }
        case TODO_CREATE_FAIL: {
            return {...state, error: action.payload}
        }
        default:
            return state;
    }
}