import React from 'react';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles';

export const CartIcon = () => {
  const dispatch = useAppDispatch();
  const toggleHidden = () => dispatch(toggleCartHidden());
  const itemCount = useAppSelector(selectCartItemsCount);

  return (
    <CartContainer onClick={toggleHidden}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  )
};