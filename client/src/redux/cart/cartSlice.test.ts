import cartReducer, { addItem, clearCart, clearCartItem, removeCartItem, toggleCartHidden } from './cartSlice';

const initialState = {
  hidden: true,
  cartItems: []
};

describe('cartReducer', () => {
  it('should return initial state', () => {
    expect(cartReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should toggle hidden with toggleHidden action', () => {
    expect(cartReducer(initialState, toggleCartHidden()).hidden).toBe(false);
  });

  it('should add item to cart if payload not matching existing item', () => {
    const itemToAdd = {
      id: 31,
      imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
      name: "Floral T-shirt",
      price: 20,
      quantity: 1
    };

    const stateCartItems = cartReducer(initialState, addItem(itemToAdd)).cartItems;
    expect(stateCartItems).toEqual([itemToAdd]);
  });

  it('should increase quantity of existing item if its matching payload', () => {
    const mockItem = {
      id: 31,
      imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
      name: "Floral T-shirt",
      price: 20,
      quantity: 2
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem]
    };

    const stateCartItems = cartReducer(mockPrevState, addItem(mockItem)).cartItems;
    expect(stateCartItems[0].quantity).toBe(3);
  });

  it('should remove existing item from cart if its quantity is 1 and its matching payload', () => {
    const mockItem = {
      id: 30,
      imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
      name: "Camo Down Vest",
      price: 325,
      quantity: 1
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [
        mockItem,
        {
          id: 31,
          imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
          name: "Floral T-shirt",
          price: 20,
          quantity: 3
        }
      ]
    };

    expect(cartReducer(mockPrevState, removeCartItem(mockItem)).cartItems)
      .toEqual(expect.not.arrayContaining([mockItem]));
  });

  it('should decrease quantity of existing item if payload matching item from cart', () => {
    const mockItem = {
      id: 30,
      imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
      name: "Camo Down Vest",
      price: 325,
      quantity: 3
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [
        mockItem,
        {
          id: 31,
          imageUrl: "https://i.ibb.co/xJS0T3Y/red-vest.png",
          name: "Red Vest",
          price: 500,
          quantity: 2
        }
      ]
    }

    expect(cartReducer(mockPrevState, removeCartItem(mockItem)).cartItems[0].quantity)
      .toBe(2);
  });

  it('should clear item from cart if payload matching item from cart', () => {
    const mockItem = {
      id: 30,
      imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
      name: "Camo Down Vest",
      price: 325,
      quantity: 1
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [
        mockItem,
        {
          id: 31,
          imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
          name: "Floral T-shirt",
          price: 20,
          quantity: 1
        }
      ]
    };

    expect(cartReducer(mockPrevState, clearCartItem(mockItem)).cartItems)
    .toEqual(expect.not.arrayContaining([mockItem]));
  });

  it('should clear cart', () => {

    const mockPrevState = {
      hidden: true,
      cartItems: [
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
      ]
    }

    expect(cartReducer(mockPrevState, clearCart()).cartItems).toEqual([]);
  });
});