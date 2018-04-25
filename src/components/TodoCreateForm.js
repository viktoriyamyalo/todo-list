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
            <div style={styles.containerStyle}>
                    <h3> Create Todo </h3>
                    <input
                        type="text"
                        placeholder="Shopping List"
                        onChange={this.onTitleChange.bind(this)}
                        value={this.props.title}
                        className="form-control"
                        style={styles.inputStyle}
                    />

                    <textarea
                        placeholder="1. a horse..."
                        rows="5"
                        onChange={this.onTextChange.bind(this)}
                        value={this.props.text}
                        className="form-control"
                        style={styles.inputStyle}
                    ></textarea>

                    <p style={styles.errorStyle}>{this.props.error}</p>

                    <button
                        onClick={this.onTodoCreate.bind(this)}
                        className="btn btn-outline-success"
                        style={styles.buttonStyle}
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

const styles = {
    containerStyle: {
        marginTop: 20
    },
    buttonStyle: {
        marginTop: 20,
    },
    errorStyle: {
        fontSize: 18,
        color: 'tomato'
    },
    inputStyle: {
        marginTop: 10
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