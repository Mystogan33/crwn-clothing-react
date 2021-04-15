import { getUserCartRef } from '../../firebase/firebase.utils';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { addItem, clearCart, clearCartItem, removeCartItem, setCartFromFirebase } from './cartSlice';
import { selectCurrentUser } from '../user/user.selectors';
import { selectCartItems } from './cart.selectors';
import { signInSuccess, signOutSuccess } from '../user/userSlice';

export function* clearCartOnSignOut() {
  yield put(clearCart());
};

export function* updateCartInFirebase(): Generator {
  const currentUser: any = yield select(selectCurrentUser);
  if(currentUser) {
    try {
      const cartRef: any = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    };
  }
};

export function* checkCartFromFirebase({ payload: user }: ReturnType<typeof signInSuccess>): Generator {
  try {
    const cartRef: any = yield getUserCartRef(user.id);
    if(!cartRef) return;
    const cartSnapshot: any = yield cartRef.get();
    yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
  } catch (error) {
    console.log(error);
  }
};

export function* onSignOutSuccess() {
  yield takeLatest(signOutSuccess.type, clearCartOnSignOut);
};

export function* onUserSignIn() {
  yield takeLatest(signInSuccess.type, checkCartFromFirebase);
};

export function* onCartChange() {
  yield takeLatest(
    [
      addItem.type,
      removeCartItem.type,
      clearCartItem.type,
      clearCart.type
    ],
    updateCartInFirebase
  );
};

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onCartChange),
    call(onUserSignIn)
  ]);
};
