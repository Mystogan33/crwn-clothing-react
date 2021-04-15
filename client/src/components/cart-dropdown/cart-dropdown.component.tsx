import React, { FC, MouseEvent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { CartItem } from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './cart-dropdown.styles';


type CartDropdownProps = RouteComponentProps;

export const CartDropdownCmp: FC<CartDropdownProps> = ({ history: { push } }) => {
  const cartItems = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();
  
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    dispatch(toggleCartHidden());
    push('/checkout');
  };
  
  const renderedCartItems = cartItems.length
    ? cartItems.map(item => <CartItem key={item.id} item={item} />)
      : ( <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer> );

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {renderedCartItems}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={handleClick}>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
  )
};

export const CartDropdown = withRouter(CartDropdownCmp);
