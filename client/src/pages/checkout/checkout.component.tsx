import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { RootState } from '../../redux/root-reducer';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { ICartItems } from '../../interfaces/interfaces';

import { CheckoutItem, StripeCheckoutButton } from '../../components';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './checkout.styles';

interface selectors {
  cartItems: ICartItems,
  total: number
};

const mapStateToProps = createStructuredSelector<RootState, selectors>({
  cartItems: selectCartItems,
  total: selectCartTotal
});

const connector = connect(mapStateToProps);
type ReduxProps = ConnectedProps<typeof connector>;
type AppProps = ReduxProps;

export const CheckoutPage = ({ cartItems, total }: AppProps) => (
 <CheckoutPageContainer>
  <CheckoutHeaderContainer>
    <HeaderBlockContainer>
      <span>Product</span>
    </HeaderBlockContainer>
    <HeaderBlockContainer>
      <span>Description</span>
    </HeaderBlockContainer>
    <HeaderBlockContainer>
      <span>Quantity</span>
    </HeaderBlockContainer>
    <HeaderBlockContainer>
      <span>Price</span>
    </HeaderBlockContainer>
    <HeaderBlockContainer>
      <span>Remove</span>
    </HeaderBlockContainer>
  </CheckoutHeaderContainer>
  { cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))
  }
  <TotalContainer>TOTAL: ${total}</TotalContainer>
  <WarningContainer>
    *Please use the following test credit card for payments*
    <br />
    Card Number: 4242 4242 4242 4242 - CVC: 123 - Date: 10/2032
  </WarningContainer>
  <StripeCheckoutButton price={total} />
 </CheckoutPageContainer>
);

export default connector(CheckoutPage);
