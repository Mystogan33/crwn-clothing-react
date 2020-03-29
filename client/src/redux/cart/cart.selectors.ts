import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => (
    cartItems.reduce((accumulateQuantity: number, cartItem) =>
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
    cartItems.reduce((accumulatePrice: number, cartItem) =>
      accumulatePrice + (cartItem.price * cartItem.quantity), 0)
  )
)
