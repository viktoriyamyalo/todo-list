import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { onTodoCreate } from '../actions';

const validate = values => {
    const errors = {}
    if (!values.title) {
        errors.title = 'Required';
    } else if (values.title.length > 15) {
        errors.username = 'Must be 15 characters or less';
    }
    if (!values.text) {
        errors.text = 'Required';
    }
    return errors;
}

const warn = values => {
    const warnings = {}
    if (!values.text) {
        warnings.text = 'Are you sure you want to create an empty todo?';
    }
    return warnings;
}

const renderField = ({
                         input,
                         placeholder,
                         type,
                         textarea,
                         meta: { touched, error, warning, invalid }
                     }) => {
    const hasError = error && touched;
    const textareaType = <textarea {...input}
                                   placeholder={placeholder}
                                   type={type}
                                   className={`form-control ${touched && invalid ? 'has-danger' : ''}`}/>;
    const inputType = <input {...input}
                             placeholder={placeholder}
                             type={type}
                             className={`form-control ${touched && invalid ? 'has-danger' : ''}`}/>;

    return (<div>
                {textarea ? textareaType : inputType}
                <div>
                    {touched &&
                    ((error && <p className="error">{error}</p>) ||
                        (warning && <p className="warning">{warning}</p>))}
                </div>
             </div>);
}

class TodoCreateForm extends Component {
    onSubmit(values) {
        this.props.onTodoCreate(values.title, values.text);
        this.props.reset();
    }


    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <div className="container is-centered is-vertical todo-create-form">
                <form className="container is-centered is-vertical"
                      onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <h3> Create Todo </h3>
                    <div className="input-ctr">
                        <Field
                            name="title"
                            component={renderField}
                            type="text"
                            placeholder="Shopping list"
                        />
                    </div>

                    <div className="input-ctr">
                        <Field
                            name="text"
                            component={renderField}
                            textarea={true}
                            rows="5"
                            placeholder="1. A horse..."
                        ></Field>
                    </div>


                    <div className="container is-centered">
                        <button
                            className="btn btn-outline-success"
                            disabled={ pristine || submitting }
                        >Create Todo</button>
                        <button className="btn btn-outline-danger" disabled={pristine || submitting} onClick={reset}>
                            Clear Values
                        </button>
                    </div>
                </form>
            </div>

        );
    }
}

TodoCreateForm = connect(null, { onTodoCreate })(TodoCreateForm);

TodoCreateForm = reduxForm({
    form: 'todoCreate',
    validate,
    warn
})(TodoCreateForm);

export default TodoCreateForm;