import React, { Component } from 'react';
import { PaymentRequestButtonElement } from 'react-stripe-elements';
import { injectStripe } from 'react-stripe-elements';

class PaymentRequestForm extends Component {
    constructor(props) {
        super(props);
        const paymentRequest = props.stripe.paymentRequest({
            country: 'US',
            currency: 'usd',
            total: {
                label: 'Demo total',
                amount: 1000,
            },
        });

        paymentRequest.on('token', ({complete, token, ...data}) => {
            console.log('Received Stripe token: ', token);
            console.log('Received customer information: ', data);
            complete('success');
        });

        paymentRequest.canMakePayment().then(result => {
            console.log(result);
            this.setState({canMakePayment: !!result});
        });

        this.state = {
            canMakePayment: false,
            paymentRequest,
        };
    }

    render() {
        console.log(this.state.paymentRequest)
        return this.state.canMakePayment ? (
            <PaymentRequestButtonElement
                paymentRequest={this.state.paymentRequest}
                className="PaymentRequestButton"
                style={{
                    paymentRequestButton: {
                        theme: 'light',
                        height: '64px',
                    },
                }}
            />
        ) : null;
    }
}
export default injectStripe(PaymentRequestForm);