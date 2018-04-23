import { TITLE_CHANGE, TEXT_CHANGE, TODOS_FETCH_SUCCESS, TODO_CREATE_SUCCESS, TODO_FETCH_SUCCESS, SEARCH_TERM_CHANGE, TODOS_SEARCH } from './types';
import firebase from 'firebase';
import _ from 'lodash';

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
            .on('value', snapshot => {

                const todos = _.map(snapshot.val(), (val, uid) => {
                    return {...val, uid};
                });

                dispatch({
                    type: TODOS_FETCH_SUCCESS,
                    payload: todos
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

export const fetchTodo = (uid) => {
    return(dispatch) => {
        firebase.database().ref(`/todos/${uid}`)
            .on('value', snapshot => {dispatch({
                    type: TODO_FETCH_SUCCESS,
                    payload: snapshot.val()
                });
            });
    }
};

export const onSearchTermChange = (searchTerm) => {
    return {
        type: SEARCH_TERM_CHANGE,
        payload: searchTerm
    }
}

export const onTodosSearch = (searchTerm, todos) => {
    console.log(todos);
    const filteredTodos = todos.filter(obj => {
        return (obj.title.indexOf(searchTerm) !== -1) || (obj.text.indexOf(searchTerm) !== -1);
    });

    return {
        type: TODOS_SEARCH,
        payload: filteredTodos
    }
}