import { CartActionTypes } from './cart.types';
import { ICartItem, ICollectionItem, ICartItems } from '../../interfaces/interfaces';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (itemToAdd: ICollectionItem) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: itemToAdd
});

export const clearItemFromCart = (itemToClear: ICartItem) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: itemToClear
});

export const removeItemFromCart = (itemToRemove: ICartItem) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: itemToRemove
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
});

export const updateCartInFirebase = () => ({
  type: CartActionTypes.UPDATE_CART_IN_FIREBASE
});

export const setCartFromFirebase = (cartItems: ICartItems) => ({
  type: CartActionTypes.SET_CART_FROM_FIREBASE,
  payload: cartItems
});
