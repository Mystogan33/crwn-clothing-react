import React, { FC } from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';
import axios from 'axios';
import { useAppDispatch } from '../../redux/hooks';
import { clearCart } from '../../redux/cart/cartSlice';

type StripeCheckoutProps = {
  price: number;
};

export const StripeCheckoutButton: FC<StripeCheckoutProps> = ({ price }) => {
  const dispatch = useAppDispatch();
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_5FzXguWrhk37WLQGCeLhSTFw00TrIwxkJp";

  const onToken = async (token: Token) => {
    try {
      const { data } = await axios.post('/payment', { amount: priceForStripe, token });
      if(data) {
        dispatch(clearCart());
        alert('Payment successful');
      }
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
