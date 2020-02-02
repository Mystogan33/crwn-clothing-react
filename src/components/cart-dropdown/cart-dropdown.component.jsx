import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export const CartDropdown = withRouter(connect(mapStateToProps, mapDispatchToProps)(
  ({ cartItems, toggleCartHidden, history }) => (
    <CartDropdownContainer>
      <CartItemsContainer>
        {
          cartItems.length
          ? cartItems.map(item => <CartItem key={item.id} item={item} />)
          : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        }
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          toggleCartHidden();
          history.push('/checkout');
        }}>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
  )
));
