import { CartState, CartActionTypes, TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM, CLEAR_CART, SET_CART_FROM_FIREBASE } from './cart.types';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from './cart.utils';

const INITIAL_STATE: CartState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action: CartActionTypes) => {
  switch(action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload)
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    case SET_CART_FROM_FIREBASE:
      return {
        ...state,
        cartItems: action.payload
      };
    default:
      return state;
  }
};

export default cartReducer;
