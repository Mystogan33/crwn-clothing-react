import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = itemToAdd => ({
  type: CartActionTypes.ADD_ITEM,
  payload: itemToAdd
});

export const clearItemFromCart = itemToClear => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: itemToClear
});

export const removeItemFromCart = itemToRemove => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: itemToRemove
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
});

export const updateCartInFirebase = () => ({
  type: CartActionTypes.UPDATE_CART_IN_FIREBASE
});

export const setCartFromFirebase = cartItems => ({
  type: CartActionTypes.SET_CART_FROM_FIREBASE,
  payload: cartItems
});