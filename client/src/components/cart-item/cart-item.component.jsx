import React from 'react';
import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer
} from './cart-item.styles';

export const CartItem = ({ item: { imageUrl, price, name, quantity }}) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item"/>
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);
