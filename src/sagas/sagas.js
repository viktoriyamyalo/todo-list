import { call, put, takeEvery } from 'redux-saga/effects';
import {
    TODO_CREATE,
    TODO_CREATE_FAIL,
    TODO_CREATE_SUCCESS,
    TODO_DELETE_SUCCESS,
    TODO_DELETE_FAIL, DELETE_TODO
} from "../actions/types";
import firebase from 'firebase';

export function* createTodoAsync(action) {
    try {
        console.log('Attempting to create new todo in worker saga');
        const ref = firebase.database().ref('/todos');
        function createTodo(todo){
            return ref.push(todo);
        }

        console.log(action.payload);
        yield call(createTodo, action.payload);
        yield put({
            type: TODO_CREATE_SUCCESS,
            payload: action.payload });
    } catch(e) {
        // Do something with the error!
        yield put({
            type: TODO_CREATE_FAIL
        })
    }
}

export function* watchCreateTodo() {
    console.log('redux saga watchCreateTodo');
    yield takeEvery(TODO_CREATE, createTodoAsync);
}

export function* deleteTodoAsync(action) {
    try {
        function deleteTodo(uid) {
            const ref= firebase.database().ref(`todos/${uid}`);
            return ref.remove();
        }
        yield call(deleteTodo, action.payload)
        yield put({
            type: TODO_DELETE_SUCCESS
        });
    } catch(e) {
        yield put({
            type: TODO_DELETE_FAIL
        })
    }
}

export function* watchDeleteTodo() {
    yield takeEvery(DELETE_TODO, deleteTodoAsync);
}

export default function* rootSaga() {
    yield [
        watchCreateTodo(),
        watchDeleteTodo()
    ]
}