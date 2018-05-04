import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { fetchTodo, onTodoStatusChange } from '../actions';
import Header from './Header';

class Todo extends Component {

    componentWillMount() {
        const { uid } = this.props.match.params;
        this.props.fetchTodo(uid);
    }

    onTodoStatusChange() {
        this.props.onTodoStatusChange(this.props.todo);
    }

    renderTodo() {
        const { todo } = this.props
        if(!todo) {
            return (
                <p>Loading...</p>
            );
        }

        const { title, text, completed } = this.props.todo;
        const backgroundColor = completed? "rgba(144,238,144, 0.5)" : "rgba(255,99,71, 0.5)";

        return (
            <div className={this.props.className}>
                <div className="todo-title">
                    <h3>{title}</h3>
                </div>

                <p className="todo-text">
                    {text}
                </p>

                <div className="todo-button">
                    {this.renderButton()}
                </div>

            </div>
        );
    }

    renderButton() {
        if(this.props.todo.completed) {
            return (
                <button
                    onClick={this.onTodoStatusChange.bind(this)}
                    className="button button-danger"
                >Mark as incomplete</button>
            );
        }

        return (
            <button
                onClick={this.onTodoStatusChange.bind(this)}
                className="button button-success"
                >Mark as completed</button>
        );
    }

    renderLabel() {
        if(this.props.todo.completed) {
            return (
            <span className="badge badge-pill badge-success">Completed</span>                                                
            );
        }
        return (
            <span className="badge badge-pill badge-danger">Incomplete</span>                                                
            );
    }

    render() {
        return(
            <div>
                <Header />
                <Link to={'/'}>Go back</Link>
                    <div>
                            {this.renderTodo()}
                    </div>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return { todo: state.todos.currentTodo }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchTodo,
        onTodoStatusChange
    }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(Todo);