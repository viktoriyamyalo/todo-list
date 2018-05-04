import React, { Component } from 'react';
import {
    CardNumberElement,
    CardExpiryElement,
    CardCVCElement
} from 'react-stripe-elements';

class CardSection extends Component {
    render() {
        return (
            <div>
            {/*<label>*/}
                {/*Card details*/}
                {/*<CardElement style={{base: {fontSize: '18px'}}} />*/}

            {/*</label>*/}
                <CardNumberElement/>
                <CardExpiryElement/>
                <CardCVCElement/>
            </div>
        );
    }
};

export default CardSection;