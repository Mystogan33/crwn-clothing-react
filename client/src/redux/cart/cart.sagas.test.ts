import { takeLatest, put } from 'redux-saga/effects';
import { clearCartOnSignOut, onSignOutSuccess, onUserSignIn, onCartChange, updateCartInFirebase, checkCartFromFirebase } from './cart.sagas';
import { SIGN_OUT_SUCCESS, SIGN_IN_SUCCESS } from '../user/user.types';

describe('on signout success saga', () => {
  it('should trigger on SIGN_OUT_SUCESS', () => {
    const generator = onSignOutSuccess();
    expect(generator.next().value).toEqual(takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut));
  });
});

describe('on user signin saga', () => {
  it('should trigger on SIGN_IN_SUCCESS', () => {
    const generator = onUserSignIn();
    expect(generator.next().value).toEqual(takeLatest(SIGN_IN_SUCCESS, checkCartFromFirebase));
  });
});

describe('on cart change saga', () => {
  it('should trigger on CART_CHANGE', () => {
    const generator = onCartChange();
    expect(generator.next().value)
    .toEqual(
      takeLatest(
        [
          ADD_ITEM,
          REMOVE_ITEM,
          CLEAR_ITEM_FROM_CART
        ],
        updateCartInFirebase
      )
    );
  });
});

describe('clear cart on signout saga', () => {
  it('should fire clearCart', () => {
    const generator = clearCartOnSignOut();
    expect(generator.next().value).toEqual(put(clearCart()));
  });
});