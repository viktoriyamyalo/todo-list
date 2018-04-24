import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from './Input';
import { Button } from './Button';
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
                <Button 
                    buttonText="Show All"
                    onClick={this.onToggleComplete.bind(this)}
                    className="btn btn-outline-primary"
                    style={styles.buttonStyle}
                />
            );
        }

        return (
                <Button  
                    buttonText="Hide Completed"
                    onClick={this.onToggleComplete.bind(this)}
                    className="btn btn-outline-primary"
                    style={styles.buttonStyle}
                />
            );

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

const styles = {
    buttonStyle: {
        marginTop: 20
    }
};

export default connect(mapStateToProps, { onTodosSearch, onSearchTermChange, onToggleComplete })(TodoSearchForm);