import { TITLE_CHANGE, TEXT_CHANGE, TODOS_FETCH_SUCCESS, TODO_CREATE_SUCCESS } from './types';
import firebase from 'firebase';

export const onTitleChange = (title) => {
    return {
        type: TITLE_CHANGE,
        payload: title
    }
};

export const onTextChange = (text) => {
    return {
        type: TEXT_CHANGE,
        payload: text
    }
};

export const onTodoCreate = (title, text) => {
    return (dispatch) => {
        firebase.database().ref('/todos')
            .push({ title, text, completed: false })
            .then(() => {
                dispatch({
                    type: TODO_CREATE_SUCCESS
                });
            });
    }
}

export const fetchTodos = () => {
    return(dispatch) => {
        firebase.database().ref('/todos')
            .on('value', snapshot => {dispatch({
                    type: TODOS_FETCH_SUCCESS,
                    payload: snapshot.val()
                });
            });
    }
};

export const onTodoStatusChange = (todo) => {
    return(dispatch) => {
        firebase.database().ref(`/todos/${todo.uid}`)
            .set({ ...todo, completed: !todo.completed });
    }
}

