import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({  cart: {cartItems} }) => ({
  cartItems
});

const getQuantities = cartItems => (
  cartItems.reduce((accumulator, currentItem) => accumulator + currentItem.quantity, 0)
);

export const CartIcon = connect(mapStateToProps, mapDispatchToProps)(
  ({ toggleCartHidden, cartItems }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">{getQuantities(cartItems)}</span>
    </div>
  )
);
