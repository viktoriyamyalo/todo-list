import React, { Component, Fragment } from 'react';
import { Elements } from 'react-stripe-elements';
import { Link } from 'react-router-dom';

import subscriptions from '../subscriptions';
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

        const { plan } = this.state;
        return (
                <Elements>
                    <Fragment>
                        <Header />
                        <div className={"container is-centered is-vertical"}>
                            <div className={"container is-centered"}>
                                <Link to="/subscription" className={"link"}>
                                    Back to choosing a plan
                                </Link>
                                <Link to="/" className={"link"}>
                                    Back to the main page
                                </Link>
                            </div>

                            <div className={"plan"}>
                                <div className="plan-title">
                                    <h3>{plan.title}</h3>
                                </div>

                                <div className="plan-price">
                                    <span className="dollar-sign">
                                        $
                                    </span>
                                    <span>
                                        {plan.price}
                                    </span>
                                </div>

                                <p className="plan-description">
                                    {plan.description}
                                </p>

                                <div className="plan-button">
                                    <CheckoutForm plan={plan} />
                                </div>

                            </div>

                        </div>
                    </Fragment>
                </Elements>

        );
    }
}

export default Checkout;
