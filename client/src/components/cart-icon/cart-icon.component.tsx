import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { RootState } from '../../redux/root-reducer';

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles';


const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector<RootState, {itemCount: number}>({
  itemCount: selectCartItemsCount
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;
type CartIconProps = ReduxProps;

export const CartIconCmp = ({ toggleCartHidden, itemCount }: CartIconProps) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

export const CartIcon = connector(CartIconCmp);
