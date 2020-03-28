import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { CartItem } from '../cart-item/cart-item.component';
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './cart-dropdown.styles';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ICartDropdownProps = PropsFromRedux & {
  history: any
};

export const CartDropdownCmp: React.FC<ICartDropdownProps> = ({ cartItems, dispatch , history }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      { cartItems.length
        ? cartItems.map((item: any) => <CartItem key={item.id} item={item} />)
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
  connector
)(CartDropdownCmp) as React.ComponentType<any>;
