import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import headerReducer from './header/header.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  header: headerReducer
});
