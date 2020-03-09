import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const PriceForStripe = price * 100;
    const publishableKey = 'pk_test_NUKERbJuDYI1nLIG58IB5LBq00fTAsAwIs';

    const onToken = token => {
      console.log(token); 
      alert('Payment Succesfull') 
    }
    return (
        <StripeCheckout
        label='Pay Now'
        name='clothing shop'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is €${price}`}
        amount={PriceForStripe}
        currency="EUR"
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}

        />
        
    )
}

export default StripeCheckoutButton;