import React, { Component } from 'react';
import { CardElement,
    CardNumberElement,
    CardExpiryElement,
    CardCVCElement
} from 'react-stripe-elements';

class CardSection extends React.Component {
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