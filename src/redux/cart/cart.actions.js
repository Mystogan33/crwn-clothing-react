import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = itemToAdd => ({
  type: CartActionTypes.ADD_ITEM,
  payload: itemToAdd
})

export const clearItemFromCart = itemToRemove => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: itemToRemove
})
