import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItemFromCart } from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles';

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: itemToRemove => dispatch(clearItemFromCart(itemToRemove)),
  addItem: itemToAdd => dispatch(addItem(itemToAdd)),
  removeItem: itemToRemove => dispatch(removeItemFromCart(itemToRemove))
});

export const CheckoutItem = connect(null, mapDispatchToProps)(
  ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
      <CheckoutItemContainer>
        <ImageContainer>
          <img src={imageUrl} alt="Item"/>
        </ImageContainer>
        <TextContainer>{name}</TextContainer>
        <QuantityContainer>
          <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
          <span>{quantity}</span>
          <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
        </QuantityContainer>
        <TextContainer>{price}</TextContainer>
        <RemoveButtonContainer onClick={() => clearItemFromCart(cartItem)}>
          &#10005;
        </RemoveButtonContainer>
    </CheckoutItemContainer>
    )
  }
);
