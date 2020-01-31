import { createSelector } from 'reselect';

const selectCart = state => state.cart;

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
