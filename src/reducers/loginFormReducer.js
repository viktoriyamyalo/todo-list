import { USERNAME_CHANGE, PASSWORD_CHANGE, LOGIN_SUCCESS, SIGNUP_SUCCESS, TOGGLE_LOGIN_FORM, LOGIN_FAIL, SIGNUP_FAIL } from "../actions/types";

const INITIAL_STATE = {username: '', password: '', user: null, isLoginFormOpen: false, error: ''}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case USERNAME_CHANGE: 
            return {...state, username: action.payload}
        case PASSWORD_CHANGE:
            return {...state, password: action.payload}
        case LOGIN_SUCCESS:
            return {...INITIAL_STATE, user: action.payload1}
        case SIGNUP_SUCCESS:
            return {...INITIAL_STATE, user: action.payload}
        case LOGIN_FAIL: 
            return {...state, password: '', error: action.payload}
        case SIGNUP_FAIL: 
            return {...state, password: '', error: action.payload}
        case TOGGLE_LOGIN_FORM: {
            return {...state, isLoginFormOpen: !state.isLoginFormOpen}
        }
        default:
            return state;
    }
}