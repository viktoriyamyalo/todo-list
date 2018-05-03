import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Todo from './components/Todo';
import Subscription from "./components/Subscription";

import './App.sass';

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
          <div className="App">
            <Route exact path="/" component={Dashboard} />
            <Route path="/todos/:uid" component={Todo} />
            <Route path="/subscription" component={Subscription} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
