import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import todoCreateFormReducer from './todoCreateFormReducer';

export default combineReducers({
    todos: todosReducer,
    todoCreateForm: todoCreateFormReducer
});