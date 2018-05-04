import React, { Component, Fragment } from 'react';
import { Elements } from 'react-stripe-elements';

import PaymentRequestForm from './PaymentRequestForm';
import CheckoutForm from './CheckoutForm';
import Header from './Header';

class Checkout extends Component {


    render() {
        return (
                <Elements>
                    <Fragment>
                        <Header />
                        <CheckoutForm plan={this.props.match.params.plan} />
                        <PaymentRequestForm />
                    </Fragment>
                </Elements>

        );
    }
}

export default Checkout;