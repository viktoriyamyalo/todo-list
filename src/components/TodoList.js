import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTodos } from '../actions';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
    componentWillMount() {
        this.props.fetchTodos();
    }

    renderTodos() {
        const { todos, filteredTodos, toggleComplete, searchTerm, loading } = this.props;

        if(loading) {
            return (
                <div className={"todos is-centered is-multiline"}>
                    <p>Loading...</p>
                </div>
            );
        }

        if(searchTerm && filteredTodos.length === 0) {
            return (
                <div className={"todos is-centered is-multiline"}>
                    <p>Sorry, no todos match your search</p>
                </div>
            );
        }
        
        if(filteredTodos.length > 0) {

            if( toggleComplete ) {
                return filteredTodos.filter(obj => {
                    return obj.completed === false;
                }).map(todo => {
                    return <TodoListItem key={todo.uid} todo={todo} />   
                });
            }

            return filteredTodos.map(todo => {
                return <TodoListItem key={todo.uid} todo={todo} />
                    
            });
        } else if(todos.length > 0) {

            if( toggleComplete ) {
                return todos.filter(obj => {
                    return obj.completed === false;
                }).map(todo => {
                    return <TodoListItem key={todo.uid} todo={todo} />   
                });
            }

            return todos.map(todo => {
                return <TodoListItem key={todo.uid} todo={todo} />
                    
            });
        }

        return (
            <div className={"todos is-centered is-multiline"}>
                <p>Please start creating todos</p>
            </div>
        );
    }

    render() {
        
        return (
            <div className="todos is-centered is-multiline ">
                {this.renderTodos()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return { 
        todos: state.todos.todos,
        filteredTodos: state.todos.filteredTodos,
        toggleComplete: state.todoSearchForm.toggleComplete,
        searchTerm: state.todoSearchForm.searchTerm,
        loading: state.todos.loading      
    };
};


 const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      fetchTodos
    }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);