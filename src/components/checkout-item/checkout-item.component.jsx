import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: itemToRemove => dispatch(clearItemFromCart(itemToRemove))
});

export const CheckoutItem = connect(null, mapDispatchToProps)(
  ({ cartItem, clearItemFromCart }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
      <div className="checkout-item">
        <div className="image-container">
          <img src={imageUrl} alt="Item"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div
          className="remove-button"
          onClick={() => clearItemFromCart(cartItem)}
        >&#10005;</div>
      </div>
    )
  }
);
