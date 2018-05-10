import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Icon, Message, Input } from 'semantic-ui-react';

class ContactForm extends Component {
    onSubmit(values) {
        console.log(values);
    }

    locationInput({ input, meta: { touched, error }, ...custom}) {
        const hasError = touched && error !== undefined;
        return (
          <div>
              { hasError &&
                <Message
                  error
                  header="Error"
                  content={error} />}
               <Input
                  error={hasError}
                  fluid
                  placeholder="Location..."
                  {...input}
                  {...custom} />
           </div>
        );
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name="location" component={this.locationInput} />
                <br/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

ContactForm = reduxForm({
        form: 'contact'
    })(ContactForm);

export default ContactForm;
