import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class ContactForm extends Component {
    onSubmit(values) {
        console.log(values);
    }


    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
                <div className="container is-centered is-vertical todo-create-form">
                    <form className="container is-centered is-vertical"
                          onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <h3> Create Todo </h3>
                        <div className="input-ctr">
                            <Field
                                name="title"
                                component="input"
                                type="text"
                                placeholder="Shopping list"
                            />
                            <label htmlFor="title">Title</label>
                        </div>

                        <div className="input-ctr">
                            <Field
                                name="text"
                                component="textarea"
                                rows="5"
                                placeholder="1. A horse..."
                            ></Field>
                            <label htmlFor="text">Text</label>
                        </div>

                        <p className="error">{this.props.error}</p>

                        <button
                            className="btn btn-outline-success"
                            disabled={ pristine || submitting }
                        >Create Todo</button>
                    </form>
                </div>

        );
    }
}

ContactForm = reduxForm({
        form: 'contact'
    })(ContactForm);

export default ContactForm;
