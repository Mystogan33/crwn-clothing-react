import {
  UserActionTypes,
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  CHECK_USER_SESSION,
  SignUpSuccessAction,
  SignUpFailureAction,
  SignOutFailureAction,
  SignInFailureAction,
  SignInSuccessAction,
  EmailSignInStartAction,
  SignUpStartAction
} from "./user.types";

/* SIGN IN */

export const googleSignInStart = (): UserActionTypes => ({
  type: GOOGLE_SIGN_IN_START
});

export const emailSignInStart = (
  emailAndPassword: EmailSignInStartAction["payload"]
): UserActionTypes => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const signInSuccess = (
  user: SignInSuccessAction["payload"]
): UserActionTypes => ({
  type: SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = (
  error: SignInFailureAction["payload"]
): UserActionTypes => ({
  type: SIGN_IN_FAILURE,
  payload: error
});

/* SIGN UP */

export const signUpStart = (
  userCredentials: SignUpStartAction["payload"]
): UserActionTypes => ({
  type: SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = ({
  user,
  additionalData
}: SignUpSuccessAction["payload"]): UserActionTypes => ({
  type: SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = (
  error: SignUpFailureAction["payload"]
): UserActionTypes => ({
  type: SIGN_UP_FAILURE,
  payload: error
});

/* SIGN OUT */

export const signOutStart = (): UserActionTypes => ({
  type: SIGN_OUT_START
});

export const signOutSuccess = (): UserActionTypes => ({
  type: SIGN_OUT_SUCCESS
});

export const signOutFailure = (
  error: SignOutFailureAction["payload"]
): UserActionTypes => ({
  type: SIGN_OUT_FAILURE,
  payload: error
});

/* CHECK USER */

export const checkUserSession = (): UserActionTypes => ({
  type: CHECK_USER_SESSION
});
