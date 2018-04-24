import React, { Component } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { Textarea } from './Textarea';
import { connect } from 'react-redux';
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
                    <Input
                        type="text"
                        placeholder="Buy milk"
                        onChange={this.onTitleChange.bind(this)}
                        value={this.props.title}
                    />

                    <Textarea
                        placeholder="Buy milk..."
                        rows="5"
                        onChange={this.onTextChange.bind(this)}
                        value={this.props.text}
                    />

                    <Button
                        buttonText="Create Todo"
                        onClick={this.onTodoCreate.bind(this)}
                        className="btn btn-outline-success"
                        style={styles.buttonStyle}
                    />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.todoCreateForm.title,
        text: state.todoCreateForm.text
    }
}

const styles = {
    containerStyle: {
        // display: 'flex'
    },
    buttonStyle: {
        marginTop: 20,
    }
}

export default connect(mapStateToProps, { onTitleChange, onTextChange, onTodoCreate })(TodoCreateForm);