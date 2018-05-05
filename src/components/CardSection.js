import React, { Component } from 'react';
import {
    CardNumberElement,
    CardExpiryElement,
    CardCVCElement,

} from 'react-stripe-elements';

class CardSection extends Component {
    render() {
        return (
            <div className={"card-section"}>
                <CardNumberElement className={"card-number"}/>
                <div className={"card-bottom-section"}>
                    <CardExpiryElement className={"card-expiry"}/>
                    <CardCVCElement className={"card-cvc"}/>
                </div>
            </div>
        );
    }
};

export default CardSection;