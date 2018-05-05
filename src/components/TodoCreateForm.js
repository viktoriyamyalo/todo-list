import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { onTitleChange, onTextChange, onTodoCreate } from '../actions';

class TodoCreateForm extends Component {

    onTitleChange(event) {
        const title = event.target.value;
        this.props.onTitleChange(title);
    }

    onTextChange(event) {
        const text = event.target.value;
        this.props.onTextChange(text);
    }

    onTodoCreate() {
        const { title, text } = this.props;
        this.props.onTodoCreate(title, text);
    }

    render() {
        return (
            <div className="container is-centered is-vertical todo-create-form">
                    <h3> Create Todo </h3>
                    <input
                        type="text"
                        placeholder="Shopping List"
                        onChange={this.onTitleChange.bind(this)}
                        value={this.props.title}
                        className="form-control"
                    />

                    <textarea
                        placeholder="1. a horse..."
                        rows="5"
                        onChange={this.onTextChange.bind(this)}
                        value={this.props.text}
                        className="form-control"
                    ></textarea>

                    <p>{this.props.error}</p>

                    <button
                        onClick={this.onTodoCreate.bind(this)}
                        className="btn btn-outline-success"
                    >Create Todo</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.todoCreateForm.title,
        text: state.todoCreateForm.text,
        error: state.todoCreateForm.error
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onTitleChange,
        onTextChange,
        onTodoCreate
    }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(TodoCreateForm);