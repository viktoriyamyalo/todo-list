import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import STRIPE_PUBLISHABLE from '../constants/stripe';
// import curl from 'curl';

export default class CheckoutButton extends React.Component {
    onToken = (token) => {
        console.log(JSON.stringify(token));
        fetch('http://localhost:3004/posts', {
            method: 'POST',
            body: JSON.stringify(token),
        }).then(response => {
            response.json().then(data => {
                alert(`We are in business`);
            });
        });
    }

    // ...

    render() {
        return (
            // ...
            <StripeCheckout
                token={this.onToken}
                stripeKey={STRIPE_PUBLISHABLE}
                amount={this.props.price*100}
                name={"Todo List Enterprise"}
                panelLabel={"Subscribe for"}
                alipay
                bitcoin

            />

        )
    }
}
// What parameters to pass to StripeCheckout?
// <StripeCheckout
//     name="Three Comma Co." // the pop-in header title
//     description="Big Data Stuff" // the pop-in header subtitle
//     image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
//     ComponentClass="div"
//     panelLabel="Give Money" // prepended to the amount in the bottom pay button
//     amount={1000000} // cents
//     currency="USD"
//     stripeKey="..."
//     locale="zh"
//     email="info@vidhub.co"
//     // Note: Enabling either address option will give the user the ability to
//     // fill out both. Addresses are sent as a second parameter in the token callback.
//     shippingAddress
//     billingAddress={false}
//     // Note: enabling both zipCode checks and billing or shipping address will
//     // cause zipCheck to be pulled from billing address (set to shipping if none provided).
//     zipCode={false}
//     alipay // accept Alipay (default false)
//     bitcoin // accept Bitcoins (default false)
//     allowRememberMe // "Remember Me" option (default true)
//     token={this.onToken} // submit callback
//     opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
//     closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
//     // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
//     // you are using multiple stripe keys
//     reconfigureOnUpdate={false}
//     // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
//     // useful if you're using React-Tap-Event-Plugin
//     triggerEvent="onTouchTap"
// >
//     <button className="btn btn-primary">
//         Use your own child component, which gets wrapped in whatever
//         component you pass into as "ComponentClass" (defaults to span)
//     </button>
// </StripeCheckout>