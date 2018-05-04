import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
        onSearchTermChange, 
        onTodosSearch,
        onToggleComplete
     } from '../actions';

class TodoSearchForm extends Component {


    onTodosSearch(event) {
        const searchTerm = event.target.value;
        const { todos } = this.props;
        this.props.onSearchTermChange(searchTerm);
        this.props.onTodosSearch(searchTerm, todos);
    }

    onToggleComplete() {
        const toggleComplete = !this.props.toggleComplete;
        this.props.onToggleComplete(toggleComplete);
    }

    renderButton() {
        if(this.props.toggleComplete) {
            return (
                <button
                    onClick={this.onToggleComplete.bind(this)}
                    className="btn btn-outline-primary"
                >Show All</button>
            );
        }

        return (
                <button  
                    onClick={this.onToggleComplete.bind(this)}
                    className="btn btn-outline-primary"
                >Hide Completed</button>
            );

    }

    render() {
        return (
            <div className="container is-centered is-vertical">
                <h3> Search and Filter Your Todos </h3>
                <input 
                    type="search"
                    placeholder="Start typing to search"
                    onChange={this.onTodosSearch.bind(this)}
                    value={this.props.searchTerm}
                    className="form-control"
                />
                {this.renderButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
            searchTerm: state.todoSearchForm.searchTerm, 
            todos: state.todos.todos,
            toggleComplete: state.todoSearchForm.toggleComplete  };
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onTodosSearch,
        onSearchTermChange, 
        onToggleComplete
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoSearchForm);