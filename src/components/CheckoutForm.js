import React, { Component, Fragment } from 'react';
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
                <Fragment>
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
                    <form action="your-server-side-code" method="POST">
                        <script
                            src="https://checkout.stripe.com/checkout.js" className="stripe-button"
                            data-key="pk_test_fNn2pnjQCd52Avn9r6gcBmyy"
                            data-amount="999"
                            data-name="Demo Site"
                            data-description="Example charge"
                            data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
                            data-locale="auto">
                        </script>
                    </form>
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