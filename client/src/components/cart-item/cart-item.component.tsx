import React, { FC } from 'react';

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer
} from './cart-item.styles';

import { ICartItem } from '../../interfaces/interfaces';

type ICartItemProps = {
  item: ICartItem
};

const CartItemComponent: FC<ICartItemProps> = ({ item: { imageUrl, price, name, quantity }}) => (
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

export const CartItem = React.memo(CartItemComponent);
