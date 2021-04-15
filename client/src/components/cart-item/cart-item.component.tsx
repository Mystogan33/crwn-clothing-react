import React, { FC } from 'react';
import { ICartItem } from '../../interfaces/interfaces';

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer
} from './cart-item.styles';

type CartItemProps = {
  item: ICartItem
};

const CartItemComponent: FC<CartItemProps> = ({ item: { imageUrl, price, name, quantity } }) => (
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
