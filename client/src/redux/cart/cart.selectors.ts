import { createSelector } from 'reselect';

const selectCart = (state: any) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => (
    cartItems.reduce((accumulateQuantity: number, cartItem: any) =>
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
    cartItems.reduce((accumulatePrice: number, cartItem: any) =>
      accumulatePrice + (cartItem.price * cartItem.quantity), 0)
  )
)
