import React, { Component } from 'react';
import { fetchTodo } from '../actions';
import { connect } from 'react-redux';
import { Header } from './Header';

class Todo extends Component {

    componentWillMount() {
        const { uid } = this.props.match.params;
        this.props.fetchTodo(uid);
    }

    renderTodo() {
        const { todo } = this.props
        if(!todo) {
            return (
                <p>Loading...</p>
            );
        }

        return (
            <div>
                {todo.title}
                {todo.text}
            </div>
        );
    }

    render() {
        console.log(this.props)
        return(
            <div>
                <Header />
                {this.renderTodo()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { todo: state.todos.currentTodo }
}

export default connect(mapStateToProps, { fetchTodo })(Todo);