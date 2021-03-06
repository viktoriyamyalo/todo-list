import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { onTodoStatusChange, deleteTodo } from '../actions';


class TodoListItem extends Component {

    onTodoStatusChange() {
        this.props.onTodoStatusChange(this.props.todo);
    }

    renderButton() {
        if(this.props.todo.completed) {
            return (
                <button
                    onClick={this.onTodoStatusChange.bind(this)}
                    className="btn btn-danger"
                >Mark as incomplete</button>
            );
        }

        return (
            <button
                onClick={this.onTodoStatusChange.bind(this)}
                className="btn btn-success"
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

    onDeleteTodo() {
        const { uid } = this.props.todo;
        this.props.deleteTodo(uid);
    }


    render() {

        const { title, text, uid, created, completed } = this.props.todo;

        let displayCreated;

        if(created) {
            displayCreated = new Date(created);
            displayCreated = displayCreated.toDateString();
        } else {
            displayCreated = '';
        }

        return (
            <div className="todo">
                <button
                    onClick={this.onDeleteTodo.bind(this)}
                    className={"button-close"}
                >x</button>
                <p>{displayCreated}</p>
                <Link to={`/todos/${uid}`} className={"link link-invisible"}>
                    <div className="todo-title">
                        <h3 className={completed? "crossed-out": ""}>{title.toUpperCase()}</h3>
                        {this.renderLabel()}
                    </div>

                    <p className={completed? "todo-text crossed-out": "todo-text"}>
                        {text}
                    </p>
                </Link>

                <div className="todo-button">
                        {this.renderButton()}
                        </div>

            </div>
        );
    }
}

export default connect(null, { onTodoStatusChange, deleteTodo })(TodoListItem);