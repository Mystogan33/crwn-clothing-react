import * as CartActions from './cart.actions';
import cartReducer from './cart.reducer';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from './cart.utils';

const initialState = {
  hidden: true,
  cartItems: []
};

describe('cartReducer', () => {
  it('should return initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(initialState);
  });

  it('should toggle hidden', () => {
    expect(cartReducer(initialState, CartActions.toggleCartHidden()).hidden).toEqual(false);
  });

  it('should add item to cart', () => {
    const itemToAdd = {
      id: 31,
      imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
      name: "Floral T-shirt",
      price: 20,
      quantity: 1
    };

    const stateCartItems = cartReducer(initialState, CartActions.addItem(itemToAdd)).cartItems;

    expect(stateCartItems)
      .toEqual(addItemToCart(initialState.cartItems, itemToAdd));
  });

  it('should remove item from cart', () => {
    const state = initialState;
    state.cartItems = [
      {
        id: 30,
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        name: "Camo Down Vest",
        price: 325,
        quantity: 1
      },
      {
        id: 31,
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        name: "Floral T-shirt",
        price: 20,
        quantity: 1
      }
    ];

    expect(cartReducer(state, CartActions.removeItemFromCart(state.cartItems[0])).cartItems)
      .toEqual(removeItemFromCart(state.cartItems, state.cartItems[0]));
  });

  it('should clear item from cart', () => {
    const state = initialState;
    state.cartItems = [
      {
        id: 30,
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        name: "Camo Down Vest",
        price: 325,
        quantity: 1
      },
      {
        id: 31,
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        name: "Floral T-shirt",
        price: 20,
        quantity: 1
      }
    ];

    expect(cartReducer(state, CartActions.clearItemFromCart(state.cartItems[0])).cartItems)
      .toEqual(clearItemFromCart(state.cartItems, state.cartItems[0]));
  });

  it('should clear cart', () => {
    const state = initialState;
    state.cartItems = state.cartItems = [
      {
        id: 30,
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        name: "Camo Down Vest",
        price: 325,
        quantity: 1
      },
      {
        id: 31,
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        name: "Floral T-shirt",
        price: 20,
        quantity: 1
      }
    ];

    expect(cartReducer(state, CartActions.clearCart()).cartItems).toEqual([]);
  });
});