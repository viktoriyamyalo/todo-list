import React, {Component} from 'react';
import { injectStripe } from 'react-stripe-elements';
import { Link } from 'react-router-dom';

import CardSection from './CardSection';

class CheckoutForm extends Component {

    handleSubmit = (event) => {

        event.preventDefault();


        this.props.stripe.createToken({name: 'Jenny Rosen'}).then(({token}) => {
            console.log('Received Stripe token:', token);
        });

        // However, this line of code will do the same thing:
        // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
    }

    render() {
        return (

                <form onSubmit={this.handleSubmit}>
                    <Link to="/subscription">
                        Back to choosing a plan
                    </Link>
                    <Link to="/">
                        Back to the main page
                    </Link>
                    <CardSection />
                    <button>Confirm order</button>
                </form>
        );
    }
}


export default injectStripe(CheckoutForm);
