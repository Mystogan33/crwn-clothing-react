import React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';
import axios from 'axios';
import { Dispatch } from 'redux';
import { clearCart } from '../../redux/cart/cart.actions';
import { connect, ConnectedProps } from 'react-redux';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearCart: () => dispatch(clearCart())
});

const connector = connect(null, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;
type StripeCheckoutProps = ReduxProps & {
  price: number;
};

export const StripeCheckoutButtonCmp = ({ price, clearCart }: StripeCheckoutProps) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_5FzXguWrhk37WLQGCeLhSTFw00TrIwxkJp";

  const onToken = async (token: Token) => {
    try {
      await axios({
        url: 'payment',
        method: 'post',
        data: { amount: priceForStripe, token }
      });
      clearCart();
      alert('Payment successful');
    } catch (error) {
      alert('There was an issue with your payment. Please use the proper credit card');
      console.log(error);
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

export const StripeCheckoutButton = connector(StripeCheckoutButtonCmp);
