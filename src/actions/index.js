import { 
    TITLE_CHANGE, 
    TEXT_CHANGE, 
    TODOS_FETCH_SUCCESS, 
    TODO_CREATE_SUCCESS, 
    TODO_FETCH_SUCCESS,
    SEARCH_TERM_CHANGE, 
    TODOS_SEARCH,
    TOGGLE_COMPLETE,
    EMAIL_CHANGE,
    PASSWORD_CHANGE,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGNUP_SUCCESS,
    TODO_CREATE_FAIL,
    TODOS_FETCH_START
    } from './types';
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
    if( !title) {
        const error = 'Please enter a title';
        return {
            type: TODO_CREATE_FAIL,
            payload: error
        }
    } else if ( !text ) {
        const error = 'Please enter some text';
        return {
            type: TODO_CREATE_FAIL,
            payload: error
        }
    }
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
        dispatch({
            type: TODOS_FETCH_START
        });
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
  
    const filteredTodos = todos.filter(obj => {
        return (obj.title.indexOf(searchTerm) !== -1) || (obj.text.indexOf(searchTerm) !== -1);
    });

    return {
        type: TODOS_SEARCH,
        payload: filteredTodos
    }
}

export const onToggleComplete = (boolean) => {
    return {
        type: TOGGLE_COMPLETE,
        payload: boolean
    }
}

export const onEmailChange = (email) => {
    return {
        type: EMAIL_CHANGE,
        payload: email
    }
}

export const onPasswordChange = (password) => {
    return {
        type: PASSWORD_CHANGE,
        payload: password
    }
}

export const onLogin = (email, password) => {
    
    if(window.localStorage.getItem(email) && window.localStorage.getItem(email) === password) {
        return {
        type: LOGIN_SUCCESS,
        payload: {email, password}
        }
    } else {
        return {
            type: LOGIN_FAIL
        }
    }
}

export const onSignup = (email, password) => {
    window.localStorage.setItem(email, password);
    return {
        type: SIGNUP_SUCCESS,
        payload: {email, password}
    }
}