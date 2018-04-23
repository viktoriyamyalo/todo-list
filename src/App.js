import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import Todo from './components/Todo';

const store = createStore(reducers, applyMiddleware(ReduxThunk,logger));

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAni8LbiUFmqYSeE6gqzVUdsziybDPrUv0",
      authDomain: "todo-list-dbc13.firebaseapp.com",
      databaseURL: "https://todo-list-dbc13.firebaseio.com",
      projectId: "todo-list-dbc13",
      storageBucket: "todo-list-dbc13.appspot.com",
      messagingSenderId: "764040293948"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Dashboard} />
            <Route path="/todos/:uid" component={Todo} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
