import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import LoginForm from './LoginForm';
import TodoCreateForm from './TodoCreateForm';
import TodoList from './TodoList';
import TodoSearchForm from './TodoSearchForm';
import Chart from "./Chart";


class Dashboard extends Component {
    render() {

        return (
            <Fragment>
                <Header/>
                <div className="forms">
                    <TodoCreateForm />
                    <TodoSearchForm />
                </div>
                <TodoList />
                {this.props.isLoginFormOpen && <LoginForm />}
                <Chart todos={this.props.todos}/>
            </Fragment>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isLoginFormOpen: state.loginForm.isLoginFormOpen,
        todos: state.todos.todos
    }
}

export default connect(mapStateToProps)(Dashboard);
