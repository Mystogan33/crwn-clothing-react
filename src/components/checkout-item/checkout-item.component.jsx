import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: itemToRemove => dispatch(clearItemFromCart(itemToRemove)),
  addItem: itemToAdd => dispatch(addItem(itemToAdd)),
  removeItem: itemToRemove => dispatch(removeItemFromCart(itemToRemove))
});

export const CheckoutItem = connect(null, mapDispatchToProps)(
  ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
      <div className="checkout-item">
        <div className="image-container">
          <img src={imageUrl} alt="Item"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
          <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
          <span className="value">{quantity}</span>
          <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <div
          className="remove-button"
          onClick={() => clearItemFromCart(cartItem)}
        >&#10005;</div>
      </div>
    )
  }
);
