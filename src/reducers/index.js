import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import todoCreateFormReducer from './todoCreateFormReducer';
import todoSearchFormReducer from './todoSearchFormReducer';

export default combineReducers({
    todos: todosReducer,
    todoCreateForm: todoCreateFormReducer,
    todoSearchForm: todoSearchFormReducer
});