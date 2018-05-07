import React, { Component, Fragment } from 'react';
import { injectStripe } from 'react-stripe-elements';
import { Link } from 'react-router-dom';

import CardSection from './CardSection';
import CheckoutButton from './CheckoutButton';

class CheckoutForm extends Component {

    handleSubmit = (event) => {

        event.preventDefault();


        this.props.stripe.createToken({name: 'Test Test'}).then(({token}) => {
            console.log('Received Stripe token:', token);
        });

    }

    render() {
        const { price } = this.props.plan;
        return (
                <Fragment>
                    <form onSubmit={this.handleSubmit} className={"checkout"}>
                        <Link to="/subscription">
                            Back to choosing a plan
                        </Link>
                        <Link to="/">
                            Back to the main page
                        </Link>
                        <CardSection />
                        <button className={"checkout-button"}>Pay ${price}</button>
                    </form>
                    <CheckoutButton
                        price={price}
                    />
                </Fragment>
        );
    }
}


export default injectStripe(CheckoutForm);

// import React from 'react'
// import axios from 'axios';
// import StripeCheckout from 'react-stripe-checkout';
//
// import STRIPE_PUBLISHABLE from '../constants/stripe';
// import PAYMENT_SERVER_URL from '../constants/server';
//
// const CURRENCY = 'EUR';
//
// const fromEuroToCent = amount => amount * 100;
//
// const successPayment = data => {
//     alert('Payment Successful');
// };
//
// const errorPayment = data => {
//     alert('Payment Error');
// };
//
// const onToken = (amount, description) => token =>
//     axios.post(PAYMENT_SERVER_URL,
//         {
//             description,
//             source: token.id,
//             currency: CURRENCY,
//             amount: fromEuroToCent(amount)
//         })
//         .then(successPayment)
//         .catch(errorPayment);
//
// const Checkout = ({ name, description, amount }) =>
//     <StripeCheckout
//         name={name}
//         description={description}
//         amount={fromEuroToCent(amount)}
//         token={onToken(amount, description)}
//         currency={CURRENCY}
//         stripeKey={STRIPE_PUBLISHABLE}
//     />
//
// export default Checkout;