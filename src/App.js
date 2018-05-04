import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {StripeProvider} from 'react-stripe-elements';

import reducers from './reducers';


import Dashboard from './components/Dashboard';
import Todo from './components/Todo';
import Subscription from "./components/Subscription";
import Checkout from './components/Checkout';

import './App.css';

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
        <StripeProvider apiKey="pk_test_fNn2pnjQCd52Avn9r6gcBmyy">
          <Provider store={store}>
            <Router>
              <div className="App">
                <Route exact path="/" component={Dashboard} />
                <Route path="/todos/:uid" component={Todo} />
                <Route path="/subscription" component={Subscription} />
                  <Route path="/checkout/:plan" component={Checkout} />
              </div>
            </Router>
          </Provider>
        </StripeProvider>
    );
  }
}

export default App;
