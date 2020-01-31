import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import headerReducer from './header/header.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'header']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  header: headerReducer
});

export default persistReducer(persistConfig, rootReducer);
