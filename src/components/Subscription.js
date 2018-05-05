import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { fetchSubscriptionPlans } from "../actions";
import {bindActionCreators} from "redux";
import { Link } from 'react-router-dom';

import subscriptions from '../subscriptions.json';
import SubscriptionCard from './SubscriptionCard';
import Header from './Header';
import LoginForm from './LoginForm';

class Subscription extends Component {

    componentDidMount() {
    }

    renderSubscriptionCards() {
        return subscriptions.map((plan, i) => {
            return (<SubscriptionCard
                            key={i}
                            title={plan.title}
                            price={plan.price}
                            description={plan.description}
                            button={plan.button}
                            className={`plan plan-${i+1}`}
            />);
        });
    }

    render() {
        return (
            <Fragment>
                <Header />
                <Link to={"/"}>
                    Go back
                </Link>
                <div className="container is-centered is-vertical">
                <img src="https://laracasts.com/svg-loaders/hearts.svg" alt="hearts"/>
                    <h3>Choose a plan that fits your needs.</h3>
                    <p>Joining takes less than a minute, and, if your peers are correct, is a pretty dang good decision. If you're still on the fence, we have a plan called “monthly” - and it’s not like the gym. Seriously - you can cancel in five seconds, if this isn't for you.</p>
                </div>

                <div className="plans container is-centered">
                    {this.renderSubscriptionCards()}
                </div>

                {this.props.isLoginFormOpen && <LoginForm />}

            </Fragment>
        );
    }
}




function mapStateToProps(state) {
    return {
        isLoginFormOpen: state.loginForm.isLoginFormOpen
};
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchSubscriptionPlans
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Subscription);
