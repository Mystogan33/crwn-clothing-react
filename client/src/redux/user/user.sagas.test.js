import { takeLatest, put, call } from 'redux-saga/effects';

import {
  signInFailure,
  signOutSuccess,
  signOutFailure,
} from './user.actions';

import {
  auth,
  createUserProfileDocument,
  getCurrentUser
} from '../../firebase/firebase.utils';

import {
  getSnapshotFromUserAuth,
  signInWithGoogle,
  signInWithEmail,
  isUserAuthenticated,
  signOut,
  signUp,
  signInAfterSignUp,
  onGoogleSignInStart,
  onEmailSignInStart,
  onCheckUserSession,
  onSignOutStart,
  onSignUpStart,
  onSignUpSuccess
} from './user.sagas';

import { SIGN_UP_SUCCESS, SIGN_UP_START, SIGN_OUT_START, CHECK_USER_SESSION, EMAIL_SIGN_IN_START, GOOGLE_SIGN_IN_START } from './user.types';

describe('on signup success saga', () => {
  it('should trigger on SIGN_UP_SUCCESS', () => {
    const generator = onSignUpSuccess();
    expect(generator.next().value)
      .toEqual(takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp));
  });
});

describe('on signup start saga', () => {
  it('should trigger on SIGN_UP_START', () => {
    const generator = onSignUpStart();
    expect(generator.next().value)
      .toEqual(takeLatest(SIGN_UP_START, signUp));
  });
});

describe('on signout start saga', () => {
  it('should trigger on SIGN_OUT_START', () => {
    const generator = onSignOutStart();
    expect(generator.next().value)
      .toEqual(takeLatest(SIGN_OUT_START, signOut));
  });
});

describe('on check user session saga', () => {
  it('should trigger on CHECK_USER_SESSION', () => {
    const generator = onCheckUserSession();
    expect(generator.next().value)
      .toEqual(takeLatest(CHECK_USER_SESSION, isUserAuthenticated));
  });
});

describe('on email sign in start saga', () => {
  it('should trigger on EMAIL_SIGN_IN_START', () => {
    const generator = onEmailSignInStart();
    expect(generator.next().value)
      .toEqual(takeLatest(EMAIL_SIGN_IN_START, signInWithEmail));
  });
});

describe('on google sign in start saga', () => {
  it('should trigger on GOOGLE_SIGN_IN_START', () => {
    const generator = onGoogleSignInStart();
    expect(generator.next().value)
      .toEqual(takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle));
  });
});

describe('on sign in after sign up saga', () => {
  it('should fire getSnapshotFromUserAuth', () => {
    const mockUser = {};
    const mockAdditionnalData = {};
    const mockAction = {
      payload: {
        user: mockUser,
        additionalData: mockAdditionnalData
      }
    };

    const generator = signInAfterSignUp(mockAction);
    expect(generator.next().value)
      .toEqual(getSnapshotFromUserAuth(mockUser, mockAdditionnalData));
  });
});

describe('on sign up saga', () => {
  const mockFormData = {
    email: 'cindy@gmail.com',
    password: 'test123',
    displayName: 'cindy33'
  };

  const mockAction = {
    payload: mockFormData
  };

  const generator = signUp(mockAction);

  it('should call auth.createUserWithEmailAndPassword', () => {
    const createUserWithEmailAndPassword = jest.spyOn(
      auth,
      'createUserWithEmailAndPassword'
    );

    generator.next();
    expect(createUserWithEmailAndPassword)
      .toHaveBeenCalled();
  });
});

describe('on sign out saga', () => {
  const generator = signOut();

  it('should call auth.signOut', () => {
    const expectSignOut = jest.spyOn(auth, 'signOut');
    generator.next();
    expect(expectSignOut)
      .toHaveBeenCalled();
  });

  it('should call signOutSuccess', () => {
    expect(generator.next().value)
      .toEqual(put(signOutSuccess()));
  });

  it('should call SignOutFailure on error', () => {
    const newGenerator = signOut();
    newGenerator.next();
    expect(newGenerator.throw('error').value)
      .toEqual(put(signOutFailure('error')));
  });
});

describe('is user authenticated saga', () => {
  const generator = isUserAuthenticated();

  it('should call getCurrentUser', () => {
    expect(generator.next().value)
      .toEqual(getCurrentUser());
  });

  it('should call getSnapshotFromUserAuth if userAuth exists', () => {
    const mockUserAuth = { uid: '123da' };
    expect(generator.next(mockUserAuth).value)
      .toEqual(getSnapshotFromUserAuth(mockUserAuth));
  });

  it('should trigger signInFailure on error', () => {
    const newGenerator = isUserAuthenticated();
    newGenerator.next();
    expect(newGenerator.throw('error').value)
      .toEqual(put(signInFailure('error')));
  });
});

describe('get snapshot from userAuth', () => {
  const mockUserAuth = {};
  const mockAdditionnalData = {};
  const generator = getSnapshotFromUserAuth(mockUserAuth, mockAdditionnalData);

  it('should call createUserProfileDocument', () => {
    expect(generator.next().value)
      .toEqual(call(createUserProfileDocument, mockUserAuth, mockAdditionnalData));
  });

  it('should call signInFailure on error', () => {
    const newGenerator = getSnapshotFromUserAuth(mockUserAuth, mockAdditionnalData);
    newGenerator.next();
    expect(newGenerator.throw('error').value)
      .toEqual(put(signInFailure('error')));
  });
  
});