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
