import React, { Component } from 'react';
import { Button } from './Button';
import { connect } from 'react-redux';
import { onTodoStatusChange } from '../actions';
import { Link } from 'react-router-dom';

class TodoListItem extends Component {
    onTodoStatusChange(event) {
        event.stopPropagation();
        this.props.onTodoStatusChange(this.props.todo);
    }

    render() {

        const { title, text, completed, uid } = this.props.todo;

        return (
            <div>
                <Link to={`/todos/${uid}`}>
                    <h3>{title}</h3>
                 </Link>
                <Button
                    onClick={this.onTodoStatusChange.bind(this)}
                    buttonText={`Completed: ${completed}`}

                    />
            </div>
        );
    }
}

const styles = {
    containerStyle: {
        
    }
}

export default connect(null, { onTodoStatusChange })(TodoListItem);