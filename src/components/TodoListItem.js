import React, { Component } from 'react';
import { Button } from './Button';
import { connect } from 'react-redux';
import { onTodoStatusChange } from '../actions';
import { Link } from 'react-router-dom';

class TodoListItem extends Component {

    onTodoStatusChange() {
        this.props.onTodoStatusChange(this.props.todo);
    }

    renderButton() {
        if(this.props.todo.completed) {
            return (
                <Button
                    onClick={this.onTodoStatusChange.bind(this)}
                    buttonText="Mark as incomplete"
                    className="btn btn-danger"
                />
            );
        }

        return (
            <Button
                onClick={this.onTodoStatusChange.bind(this)}
                buttonText="Mark as completed"
                className="btn btn-success"
                />
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