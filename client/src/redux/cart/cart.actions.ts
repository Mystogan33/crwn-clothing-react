import { CartActionTypes, TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM, CLEAR_CART, UPDATE_CART_IN_FIREBASE, SET_CART_FROM_FIREBASE } from './cart.types';
import { ICartItem, ICartItems, ICollectionItem } from '../../interfaces/interfaces';

export const toggleCartHidden = (): CartActionTypes => ({
  type: TOGGLE_CART_HIDDEN
});

export const addItem = (itemToAdd: ICartItem | ICollectionItem): CartActionTypes => ({
  type: ADD_ITEM,
  payload: itemToAdd
});

export const clearItemFromCart = (itemToClear: ICartItem): CartActionTypes => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: itemToClear
});

export const removeItemFromCart = (itemToRemove: ICartItem): CartActionTypes => ({
  type: REMOVE_ITEM,
  payload: itemToRemove
});

export const clearCart = (): CartActionTypes => ({
  type: CLEAR_CART
});

export const updateCartInFirebase = (): CartActionTypes => ({
  type: UPDATE_CART_IN_FIREBASE
});

export const setCartFromFirebase = (cartItems: ICartItems): CartActionTypes => ({
  type: SET_CART_FROM_FIREBASE,
  payload: cartItems
});
