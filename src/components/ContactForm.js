import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
    const errors = {}
    if (!values.title) {
        errors.title = 'Required';
    } else if (values.title.length > 15) {
        errors.username = 'Must be 15 characters or less';
    }
    // if (!values.text) {
    //     errors.text = 'Required';
    // }
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
                         meta: { touched, error, warning }
                     }) => (

        <div>
            <input {...input} placeholder={placeholder} type={type} />
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
)

class ContactForm extends Component {
    onSubmit(values) {
        console.log(values);
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
                        <button type="button" disabled={pristine || submitting} onClick={reset}>
                            Clear Values
                        </button>
                    </form>
                </div>

        );
    }
}

ContactForm = reduxForm({
        form: 'contact',
        validate,
        warn
    })(ContactForm);

export default ContactForm;

// import React from 'react'
// import { Field, reduxForm } from 'redux-form'
//
// const validate = values => {
//     const errors = {}
//     if (!values.username) {
//         errors.username = 'Required'
//     } else if (values.username.length > 15) {
//         errors.username = 'Must be 15 characters or less'
//     }
//     if (!values.email) {
//         errors.email = 'Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address'
//     }
//     if (!values.age) {
//         errors.age = 'Required'
//     } else if (isNaN(Number(values.age))) {
//         errors.age = 'Must be a number'
//     } else if (Number(values.age) < 18) {
//         errors.age = 'Sorry, you must be at least 18 years old'
//     }
//     return errors
// }
//
// const warn = values => {
//     const warnings = {}
//     if (values.age < 19) {
//         warnings.age = 'Hmm, you seem a bit young...'
//     }
//     return warnings
// }
//
// const renderField = ({
//                          input,
//                          label,
//                          type,
//                          meta: { touched, error, warning }
//                      }) => (
//     <div>
//         <label>{label}</label>
//         <div>
//             <input {...input} placeholder={label} type={type} />
//             {touched &&
//             ((error && <span>{error}</span>) ||
//                 (warning && <span>{warning}</span>))}
//         </div>
//     </div>
// )
//
// const SyncValidationForm = props => {
//     const { handleSubmit, pristine, reset, submitting } = props
//     return (
//         <form onSubmit={handleSubmit}>
//             <Field
//                 name="username"
//                 type="text"
//                 component={renderField}
//                 label="Username"
//             />
//             <Field name="email" type="email" component={renderField} label="Email" />
//             <Field name="age" type="number" component={renderField} label="Age" />
//             <div>
//                 <button type="submit" disabled={submitting}>
//                     Submit
//                 </button>
//                 <button type="button" disabled={pristine || submitting} onClick={reset}>
//                     Clear Values
//                 </button>
//             </div>
//         </form>
//     )
// }
//
// export default reduxForm({
//     form: 'syncValidation', // a unique identifier for this form
//     validate, // <--- validation function given to redux-form
//     warn // <--- warning function given to redux-form
// })(SyncValidationForm)
