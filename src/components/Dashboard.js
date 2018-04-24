import React, { Component } from 'react';


import TodoCreateForm from './TodoCreateForm';
import TodoList from './TodoList';
import Header from './Header';
import TodoSearchForm from './TodoSearchForm';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Header/>
                <div style={styles.containerStyle}>
                    <TodoCreateForm />
                    <TodoSearchForm />
                </div>
                <TodoList />
                {this.props.isLoginFormOpen && <LoginForm />}
            </div>
        );
    }
}

const styles = {
    containerStyle: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginFormOpen: state.loginForm.isLoginFormOpen
    }
}

export default connect(mapStateToProps)(Dashboard);
