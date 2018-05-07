import React, { Component, Fragment } from 'react';
import { injectStripe } from 'react-stripe-elements';
import { Link } from 'react-router-dom';

import CardSection from './CardSection';
import CheckoutButton from './CheckoutButton';

class CheckoutForm extends Component {

    // handleSubmit = (event) => {
    //
    //     event.preventDefault();
    //
    //
    //     this.props.stripe.createToken({name: 'Test Test'}).then(({token}) => {
    //         console.log('Received Stripe token:', token);
    //     });
    //
    // }

    render() {
        const { price, title } = this.props.plan;
        return (
                <Fragment>
                    <div className={"container is-centered"}>

                        {/*<CardSection />*/}
                        {/*<button className={"checkout-button"}>Pay ${price}</button>*/}
                        </div>
                    <CheckoutButton
                        name={'Todo Subscription'}
                        description={`${title}`}
                        amount={price}
                        panelLabel={"Subscribe for"}
                    />
                </Fragment>
        );
    }
}


export default injectStripe(CheckoutForm);
