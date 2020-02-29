import CartActionTypes from './cart.types';

import {
  addItem,
  removeItemFromCart,
  clearItemFromCart,
  clearCart,
  toggleCartHidden,
  setCartFromFirebase,
  updateCartInFirebase
} from './cart.actions';

describe('cart Actions', () => {
  describe('toggleCartHidden action', () => {
    it('should create the toggleHidden action', () => {
      expect(toggleCartHidden().type).toEqual(CartActionTypes.TOGGLE_CART_HIDDEN);
    });
  });

  describe('addItem action', () => {
    it('should create the addItem action', () => {
      const mockItem = { 
        id: 1,
        imageUrl: "https://images.com",
        name: "Brown Vest",
        price: 25 
      };

      const action = addItem(mockItem);
      expect(action.type).toEqual(CartActionTypes.ADD_ITEM);
      expect(action.payload).toEqual(mockItem);
    });
  });

  describe('removeItem action', () => {
    it('should create the removeItem action', () => {
      const mockItem = { 
        id: 1,
        imageUrl: "https://images.com",
        name: "Brown Vest",
        price: 25 
      };
    
      const action = removeItemFromCart(mockItem);
      expect(action.type).toEqual(CartActionTypes.REMOVE_ITEM);
      expect(action.payload).toEqual(mockItem);
    });
  });

  describe('clearItem action', () => {
    it('should create the clearItem action', () => {
      const mockItem = { 
        id: 1,
        imageUrl: "https://images.com",
        name: "Brown Vest",
        price: 25 
      };

      const action = clearItemFromCart(mockItem);
      expect(action.type).toEqual(CartActionTypes.CLEAR_ITEM_FROM_CART);
      expect(action.payload).toEqual(mockItem);
    });
  });

  describe('clearCart action', () => {
    it('should create the clearCart action', () => {
      expect(clearCart().type).toEqual(CartActionTypes.CLEAR_CART);
    });
  });
});

