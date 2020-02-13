export const addItemToCart = (cartItems, cartItemToAdd) => {
  const filterById = cartItem => cartItem.id === cartItemToAdd.id;
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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const filterById = cartItem => cartItem.id === cartItemToRemove.id;
  const existingCartItem = cartItems.find(filterById);

  if(existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  } else {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity -1 }
      : cartItem
    )
  }
};
