import { EMAIL_CHANGE, PASSWORD_CHANGE, LOGIN_SUCCESS, SIGNUP_SUCCESS, TOGGLE_LOGIN_FORM } from "../actions/types";

const INITIAL_STATE = {email: '', password: '', user: null, isLoginFormOpen:false}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EMAIL_CHANGE: 
            return {...state, email: action.payload}
        case PASSWORD_CHANGE:
            return {...state, password: action.payload}
        case LOGIN_SUCCESS:
            return {...INITIAL_STATE, user: action.payload}
        case SIGNUP_SUCCESS:
            return {...INITIAL_STATE}
        case TOGGLE_LOGIN_FORM: {
            return {...state, isLoginFormOpen: !state.isLoginFormOpen}
        }
        default:
            return state;
    }
}