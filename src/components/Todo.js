import React, { Component } from 'react';
import { fetchTodo, onTodoStatusChange } from '../actions';
import { connect } from 'react-redux';
import Header from './Header';
import { Link } from 'react-router-dom';
import { Button } from './Button';

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
            <div className="card" style={{backgroundColor, marginLeft: 20, marginTop: 20, padding: 5, maxWidth: 250}}>
            <div className="card-body">
               
                    <h3>{title}</h3>
                    {this.renderLabel()}
                    <p>{text}</p>
                    {this.renderButton()}                    
          </div>
        </div>
        );
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
        return(
            <div className="card">
                <div className="card-body">
                    <Header />
                    <Link to={'/'}>Go back</Link>
                    {this.renderTodo()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { todo: state.todos.currentTodo }
}


export default connect(mapStateToProps, { fetchTodo, onTodoStatusChange })(Todo);