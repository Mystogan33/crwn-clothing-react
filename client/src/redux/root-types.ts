import { ShopState } from "./shop/shop.types";
import { CartState } from "./cart/cart.types";
import { DirectoryState } from "./directory/directory.type";

export interface RootState {
  shop: ShopState,
  cart: CartState,
  directory: DirectoryState
};