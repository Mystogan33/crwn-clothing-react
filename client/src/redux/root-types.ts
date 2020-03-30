import { ShopState } from "./shop/shop.types";
import { CartState } from "./cart/cart.types";

export interface RootState {
  shop: ShopState,
  cart: CartState
};