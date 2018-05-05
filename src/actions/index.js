import {
    TITLE_CHANGE,
    TEXT_CHANGE,
    TODOS_FETCH_SUCCESS,
    TODO_FETCH_SUCCESS,
    SEARCH_TERM_CHANGE,
    TODOS_SEARCH,
    TOGGLE_COMPLETE,
    USERNAME_CHANGE,
    PASSWORD_CHANGE,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGNUP_SUCCESS,
    TODO_CREATE_FAIL,
    TODOS_FETCH_START,
    TOGGLE_LOGIN_FORM,
    SIGNUP_FAIL,
    FETCH_SUBSCRIPTION_PLANS_SUCCESS,
    TODO_CREATE,
    DELETE_TODO
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
    // return (dispatch) => {
    //     firebase.database().ref('/todos')
    //         .push({ title, text, completed: false })
    //         .then(() => {
    //             dispatch({
    //                 type: TODO_CREATE_SUCCESS
    //             });
    //         });
    // }

    const date = +new Date();
    return {
        type: TODO_CREATE,
        payload: { title, text, completed: false, created: date}
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
    
        return (obj.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) || (obj.text.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
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

export const onUsernameChange = (username) => {
    return {
        type: USERNAME_CHANGE,
        payload: username
    }
}

export const onPasswordChange = (password) => {
    return {
        type: PASSWORD_CHANGE,
        payload: password
    }
}

export const onLogin = (username, password) => {
    
    if(!username || !password) {
        const error = "Please fill out all the fields";
        return {
            type: LOGIN_FAIL,
            payload: error
        }
    }

    if(!window.localStorage.getItem(username)) {
        const error = "User doesn't exist, please sign up first";
        return {
            type: LOGIN_FAIL,
            payload: error
        }
    }

    if(window.localStorage.getItem(username) !== password) {
        const error = "Sorry, incorrect password";
        return {
            type: LOGIN_FAIL,
            payload: error
        }

    }
    
    if(window.localStorage.getItem(username) && window.localStorage.getItem(username) === password) {
        return {
        type: LOGIN_SUCCESS,
        payload: {username, password}
        }
    } else {
        return {
            type: LOGIN_FAIL
        }
    }
}

export const onSignup = (username, password) => {

    if(!username || !password) {
        const error = "Please fill out all the fields";
        return {
            type: SIGNUP_FAIL,
            payload: error
        }
    } else if( password.length < 8) {
        const error = "Please choose a longer password";
        return {
            type: SIGNUP_FAIL,
            payload: error
        }
    }

    if(window.localStorage.getItem(username) && window.localStorage.getItem(username) === password) {
        const error = "User already exists, please log in instead"
        return {
            type: SIGNUP_FAIL,
            payload: error        
        }
    }

    if(window.localStorage.getItem(username) && window.localStorage.getItem(username) !== password) {
        const error = "This username is already taken";
        return {
            type: SIGNUP_FAIL,
            payload: error
        }
    }

    window.localStorage.setItem(username, password);
    
    return {
        type: SIGNUP_SUCCESS,
        payload: {username, password}
    }
}

export const toggleLoginForm = () => {
    return {
        type: TOGGLE_LOGIN_FORM
    }
}

export const fetchSubscriptionPlans = () => {
    return(dispatch) => {
        firebase.database().ref('/subscription')
            .on('value', snapshot => {

                const subscriptionPlans = _.map(snapshot.val(), (val, uid) => {
                    return {...val, uid};
                });

                dispatch({
                    type: FETCH_SUBSCRIPTION_PLANS_SUCCESS,
                    payload: subscriptionPlans
                });
            });
    }
}

export const deleteTodo = (uid) => {
    return {
        type: DELETE_TODO,
        payload: uid
    }
}