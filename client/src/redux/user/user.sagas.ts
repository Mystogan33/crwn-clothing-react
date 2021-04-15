import { takeLatest, put, all, call } from "redux-saga/effects";

import firebase, {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser
} from "../../firebase/firebase.utils";

import { checkUserSession, emailSignInStart, googleSignInStart, signInFailure, signInSuccess, signOutFailure, signOutStart, signOutSuccess, signUpFailure, signUpStart, signUpSuccess } from "./userSlice";

/* SIGN IN */

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmail({
  payload: { email, password }
}: ReturnType<typeof emailSignInStart>) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

/* SIGN UP */

export function* signUp({ payload: { email, password, displayName }}: ReturnType<typeof signUpStart>) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(
      email,
      password
    );
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }: ReturnType<typeof signUpSuccess>) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

/* SIGN OUT */

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

/* CHECKING USER */

export function* getSnapshotFromUserAuth(
  userAuth: firebase.User,
  additionalData?: { displayName: string }
): Generator {
  try {
    const userRef: any = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot: any = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated(): Generator {
  try {
    const userAuth: any = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

/* EFFECTS METHODS */

export function* onGoogleSignInStart() {
  yield takeLatest(googleSignInStart.type, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(emailSignInStart.type, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(signUpStart.type, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(signUpSuccess.type, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield takeLatest(signOutStart.type, signOut);
}

export function* onCheckUserSession() {
  yield takeLatest(checkUserSession.type, isUserAuthenticated);
}

/* SAGAS */

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
    call(onCheckUserSession)
  ]);
}