import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem, ICartItems, ICollectionItem } from '../../interfaces/interfaces';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from './cart.utils';

export interface CartState {
  hidden: boolean,
  cartItems: ICartItems
};

const initialState: CartState = {
  hidden: true,
  cartItems: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartHidden: (state) => {
      state.hidden = !state.hidden;
    },
    addItem: (state, { payload }: PayloadAction<ICartItem | ICollectionItem>) => {
      state.cartItems = addItemToCart(state.cartItems as ICartItems, payload);
    },
    clearCartItem: (state, { payload }: PayloadAction<ICartItem>) => {
      state.cartItems = clearItemFromCart(state.cartItems as ICartItems, payload);
    },
    removeCartItem: (state, { payload }: PayloadAction<ICartItem>) => {
      state.cartItems = removeItemFromCart(state.cartItems as ICartItems, payload)
    },
    clearCart: (state) => {
      state.cartItems = []
    },
    setCartFromFirebase: (state, { payload }: PayloadAction<ICartItems>) => {
      state.cartItems = payload;
    }
  }
});

export const { toggleCartHidden, addItem, clearCartItem, removeCartItem, clearCart, setCartFromFirebase } = cartSlice.actions;
export default cartSlice.reducer;