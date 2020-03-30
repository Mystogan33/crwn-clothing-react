import { createSelector } from 'reselect';
import { AppState } from '../root-types';

const selectCart = (state: AppState) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => (
    cartItems.reduce((accumulateQuantity, cartItem) =>
      accumulateQuantity + cartItem.quantity, 0)
  )
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => (
    cartItems.reduce((accumulatePrice, cartItem) =>
      accumulatePrice + (cartItem.price * cartItem.quantity), 0)
  )
);
