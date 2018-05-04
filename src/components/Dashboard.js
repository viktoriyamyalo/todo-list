import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import LoginForm from './LoginForm';
import TodoCreateForm from './TodoCreateForm';
import TodoList from './TodoList';
import TodoSearchForm from './TodoSearchForm';


class Dashboard extends Component {
    render() {

        return (
            <Fragment>
                <Header/>
                <div className="container forms">
                    <TodoCreateForm />
                    <TodoSearchForm />
                </div>
                <TodoList />
                {this.props.isLoginFormOpen && <LoginForm />}
            </Fragment>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isLoginFormOpen: state.loginForm.isLoginFormOpen
    }
}

export default connect(mapStateToProps)(Dashboard);
