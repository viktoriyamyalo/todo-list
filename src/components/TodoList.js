import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions';
import _ from 'lodash';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
    componentWillMount() {
        this.props.fetchTodos();
    }

    renderTodos() {
        const { todos } = this.props;
        if(todos.length > 0) {
            return todos.map(todo => {
                return <TodoListItem key={todo.uid} todo={todo} />
                    
            });
        }
        return <p>Please start creating todos</p>;
    }

    render() {
        
        return (
            <div>
                {this.renderTodos()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    const todos = _.map(state.todos.todos, (val, uid) => {
        return {...val, uid};
    });
    
    return { todos };
};

export default connect(mapStateToProps, { fetchTodos })(TodoList);