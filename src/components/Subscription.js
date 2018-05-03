import React, {Component} from 'react';
import {connect} from 'react-redux';
import SubscriptionCard from "./SubscriptionCard";

class Subscription extends Component {
    render() {
        return (
            <div>
                Subscription
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(Subscription);
