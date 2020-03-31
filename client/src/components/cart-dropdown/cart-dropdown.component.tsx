import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose } from 'redux';
import { RootState } from '../../redux/root-reducer';

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { CartItem } from '../cart-item/cart-item.component';
import { ICartItems } from '../../interfaces/interfaces';

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './cart-dropdown.styles';

interface selectors {
  cartItems: ICartItems
};

const mapStateToProps = createStructuredSelector<RootState, selectors>({
  cartItems: selectCartItems
});

const connector = connect(mapStateToProps);
type ReduxProps = ConnectedProps<typeof connector>;
type AppProps = ReduxProps & RouteComponentProps;

export const CartDropdownCmp = ({ cartItems, dispatch , history }: AppProps) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      { cartItems.length
        ? cartItems.map(item => <CartItem key={item.id} item={item} />)
        : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      }
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        dispatch(toggleCartHidden());
        history.push('/checkout');
      }}>GO TO CHECKOUT</CartDropdownButton>
  </CartDropdownContainer>
);

export const CartDropdown = compose(
  withRouter,
  connector,
)(CartDropdownCmp);
