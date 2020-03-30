import { ICartItem, ICollectionItem, ICartItems } from "../../interfaces/interfaces";

export const addItemToCart = (cartItems: ICartItems, cartItemToAdd: ICollectionItem | ICartItem) => {
  const filterById = (cartItem: typeof cartItemToAdd) => cartItem.id === cartItemToAdd.id;
  const isCartItemExist = cartItems.find(filterById);

  if(isCartItemExist) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    );
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
  }
};

export const removeItemFromCart = (cartItems: ICartItems, cartItemToRemove: ICartItem) => {
  const filterById = (cartItem: ICartItem) => cartItem.id === cartItemToRemove.id;
  const existingCartItem = cartItems.find(filterById);

  if(existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  } else {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity -1 }
      : cartItem
    )
  }
};

export const clearItemFromCart = (cartItems: ICartItems, cartItemToClear: ICartItem) => {
  const filterById = (cartItem: ICartItem) => cartItem.id !== cartItemToClear.id;
  return cartItems.filter(filterById);
};
