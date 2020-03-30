import { ShopState } from "./shop/shop.types";
import { CartState } from "./cart/cart.types";
import { DirectoryState } from "./directory/directory.type";
import { UserState } from "./user/user.types";

export interface AppState {
  shop: ShopState,
  cart: CartState,
  directory: DirectoryState,
  user: UserState
};