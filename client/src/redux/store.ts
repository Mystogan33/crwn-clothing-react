import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from './root-saga';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore
} from "redux-persist";

import rootReducer from './root-reducer';

const { NODE_ENV } = process.env;
const addLogger = NODE_ENV === 'development' ? logger : null;

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({
  thunk: false,
  serializableCheck: {
    ignoredActions: [
      FLUSH,
      REHYDRATE,
      PAUSE,
      PERSIST,
      PURGE,
      REGISTER
    ]
  }
}), sagaMiddleware, addLogger];

export const store = configureStore({
  reducer: rootReducer,
  middleware
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default { store, persistor };
