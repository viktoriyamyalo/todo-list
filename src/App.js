import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import Todo from './components/Todo';
import LoginForm from './components/LoginForm';
import { Button } from './components/Button';

const store = createStore(reducers, applyMiddleware(ReduxThunk,logger));

class App extends Component {

  state = {
    isLoginFormOpen: false
  };

  toggleLoginForm = () => {
    this.setState(state => ({isLoginFormOpen: !state.isLoginFormOpen}));
  };

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
            <Button 
              onClick={this.toggleLoginForm.bind(this)}
              buttonText="Log In/Sign Up"
              className="btn btn-light"
              style={styles.buttonStyle}
              />
          
            { this.state.isLoginFormOpen && <LoginForm onClose={this.toggleLoginForm} />}
          </div>
        </Router>
      </Provider>
    );
  }
}

const styles = {
  buttonStyle: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 2
  }
}

export default App;
