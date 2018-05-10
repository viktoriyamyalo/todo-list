import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import todoCreateFormReducer from './todoCreateFormReducer';
import todoSearchFormReducer from './todoSearchFormReducer';
import loginFormReducer from './loginFormReducer';
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
    todos: todosReducer,
    todoCreateForm: todoCreateFormReducer,
    todoSearchForm: todoSearchFormReducer,
    loginForm: loginFormReducer,
    form: formReducer
});