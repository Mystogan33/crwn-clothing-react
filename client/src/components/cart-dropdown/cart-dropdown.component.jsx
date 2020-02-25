import React from 'react';
import { connect } from 'react-redux';
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

const CartDropdownCmp = React.memo(
  ({ cartItems, toggleCartHidden, history }) => (
      <CartDropdownContainer>
        <CartItemsContainer>
          { cartItems.length
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
);


const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});


export const CartDropdown = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(CartDropdownCmp);
