import React from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { clearItemFromCart, addItem, removeItemFromCart } from '../../redux/cart/cart.actions';
import { ICartItem } from '../../interfaces/interfaces';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearItemFromCart: (itemToRemove: ICartItem) => dispatch(clearItemFromCart(itemToRemove)),
  addItem: (itemToAdd: ICartItem) => dispatch(addItem(itemToAdd)),
  removeItem: (itemToRemove: ICartItem) => dispatch(removeItemFromCart(itemToRemove))
});

const connector = connect(null, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;
type CheckoutItemProps = ReduxProps & {
  cartItem: ICartItem
};

export const CheckoutItemComponent = ({ cartItem, clearItemFromCart, addItem, removeItem }: CheckoutItemProps) => {
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
};

export const CheckoutItem = connector(CheckoutItemComponent);
