import { EMAIL_CHANGE, PASSWORD_CHANGE, LOGIN_SUCCESS, SIGNUP_SUCCESS } from "../actions/types";

const INITIAL_STATE = {email: '', password: '', user: null}

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
        default:
            return state;
    }
}