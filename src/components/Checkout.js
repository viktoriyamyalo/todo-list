import React, { Component, Fragment } from 'react';
import { Elements } from 'react-stripe-elements';

import subscriptions from '../subscriptions';
import PaymentRequestForm from './PaymentRequestForm';
import CheckoutForm from './CheckoutForm';
import Header from './Header';

class Checkout extends Component {

    state = {plan: {}};

    componentWillMount() {
        const {planTitle} = this.props.match.params;
        const plan = subscriptions.filter((plan) => {
            return plan.title.toLowerCase() === planTitle;
        })[0];
        this.setState({plan});
    }


    render() {
        return (
                <Elements>
                    <Fragment>
                        <Header />
                        <CheckoutForm plan={this.state.plan} />
                        <PaymentRequestForm />
                    </Fragment>
                </Elements>

        );
    }
}

export default Checkout;