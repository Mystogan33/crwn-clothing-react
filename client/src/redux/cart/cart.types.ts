import { ICartItems, ICollectionItem, ICartItem } from "../../interfaces/interfaces";

export interface CartState {
  hidden: boolean,
  cartItems: ICartItems
};

export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const UPDATE_CART_IN_FIREBASE = 'UPDATE_CART_IN_FIREBASE';
export const SET_CART_FROM_FIREBASE = 'SET_CART_FROM_FIREBASE';

export interface ToggleCartHiddenAction {
  type: typeof TOGGLE_CART_HIDDEN
};

export interface AddItemAction {
  type: typeof ADD_ITEM,
  payload: ICartItem | ICollectionItem
};

export interface removeItemAction {
  type: typeof REMOVE_ITEM,
  payload: ICartItem
};

export interface clearItemAction {
  type: typeof CLEAR_ITEM_FROM_CART,
  payload: ICartItem
};

export interface clearCartAction {
  type: typeof CLEAR_CART
};

export interface updateCartInFirebaseAction {
  type: typeof UPDATE_CART_IN_FIREBASE
};

export interface setCartFromFirebaseAction {
  type: typeof SET_CART_FROM_FIREBASE,
  payload: ICartItems
};

export type CartActionTypes = (
  ToggleCartHiddenAction | AddItemAction | 
  removeItemAction | clearItemAction | 
  clearCartAction | updateCartInFirebaseAction | 
  setCartFromFirebaseAction
);
