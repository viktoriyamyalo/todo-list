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
        const { todos, filteredTodos } = this.props;
        if(filteredTodos.length > 0) {
            return filteredTodos.map(todo => {
                return <TodoListItem key={todo.uid} todo={todo} />
                    
            });
        }
        if(todos.length > 0) {
            return todos.map(todo => {
                return <TodoListItem key={todo.uid} todo={todo} />
                    
            });
        }
        return <p>Please start creating todos</p>;
    }

    render() {
        
        return (
            <div style={styles.containerStyle}>
                {this.renderTodos()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return { todos: state.todos.todos, filteredTodos:state.todos.filteredTodos };
};

 const styles = {
     containerStyle: {
         display: 'flex',
         justifyContent: 'space-evenly',
         alignItems: 'center',
         flexWrap: 'wrap'
     }
 }

export default connect(mapStateToProps, { fetchTodos })(TodoList);