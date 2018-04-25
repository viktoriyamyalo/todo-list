import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { onTodoStatusChange } from '../actions';


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
                buttonText="Mark as completed"
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

        const { title, text, completed, uid } = this.props.todo;
        const backgroundColor = completed? "rgba(144,238,144, 0.5)" : "rgba(255,99,71, 0.5)";

        return (
            <div className="card" style={{backgroundColor, marginLeft: 20, marginTop: 20, padding: 5}}>
                <div className="card-body">
                    <Link to={`/todos/${uid}`}>
                        <h3>{title}</h3>
                        {this.renderLabel()}
                        <p>{text}</p>
                    </Link> 
                        {this.renderButton()}                    
              </div>
            </div>
        );
    }
}

export default connect(null, { onTodoStatusChange })(TodoListItem);