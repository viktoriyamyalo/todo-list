import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from './Input';
import { Button } from './Button';
import { onSearchTermChange, onTodosSearch } from '../actions';

class TodoSearchForm extends Component {

    onTodosSearch(event) {
        const searchTerm = event.target.value;
        const { todos } = this.props;
        this.props.onSearchTermChange(searchTerm);
        this.props.onTodosSearch(searchTerm, todos);
    }
    render() {
        return (
            <div>
                <Input 
                    type="search"
                    placeholder="Buy..."
                    onChange={this.onTodosSearch.bind(this)}
                    value={this.props.searchTerm}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { searchTerm: state.todoSearchForm.searchTerm, todos: state.todos.todos };
}

export default connect(mapStateToProps, { onTodosSearch, onSearchTermChange })(TodoSearchForm);