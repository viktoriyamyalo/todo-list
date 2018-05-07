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

        const { title, text } = this.props.todo;

        return (
            <div className={"todo-standalone"}>
                <div className="todo-title">
                    <h3>{title.toUpperCase()}</h3>

                </div>

                <p className="todo-text">
                    {text}
                </p>

                <div className="todo-button">
                    {this.renderButton()}
                    {this.renderLabel()}
                </div>

            </div>
        );
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

    render() {
        return(
            <div>
                <Header />
                <div className="container is-centered is-vertical">
                    <Link to={'/'} className={"link"}>Go back</Link>
                    <div className={"container is-centered"}>
                        {this.renderTodo()}
                    </div>
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