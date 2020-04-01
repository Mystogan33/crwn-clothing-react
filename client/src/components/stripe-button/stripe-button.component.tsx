import React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';
import axios from 'axios';

interface StripeCheckoutProps {
  price: number;
};

export const StripeCheckoutButton = ({ price }: StripeCheckoutProps) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_5FzXguWrhk37WLQGCeLhSTFw00TrIwxkJp";

  const onToken = async (token: Token) => {
    try {
      await axios({
        url: 'payment',
        method: 'post',
        data: { amount: priceForStripe, token }
      });
      alert('Payment successful');
    } catch (error) {
      alert('There was an issue with your payment. Please use the proper credit card');
    };
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
