import { User, ErrorMessage, SignInCredentials, SignUpCredentials } from "../../interfaces/interfaces";

export interface UserState {
  currentUser: User | null,
  error: ErrorMessage | null
};

export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START';
export const EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE'; 

export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const SIGN_OUT_START = 'SIGN_OUT_START';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';

export const CHECK_USER_SESSION = 'CHECK_USER_SESSION';

export interface GoogleSignInStartAction {
  type: typeof GOOGLE_SIGN_IN_START
};

export interface EmailSignInStartAction {
  type: typeof EMAIL_SIGN_IN_START,
  payload: SignInCredentials
};

export interface SignInSuccessAction {
  type: typeof SIGN_IN_SUCCESS,
  payload: User
};

export interface SignInFailureAction {
  type: typeof SIGN_IN_FAILURE,
  payload: ErrorMessage
};

export interface SignUpStartAction {
  type: typeof SIGN_UP_START,
  payload: SignUpCredentials
};

export interface SignUpSuccessAction {
  type: typeof SIGN_UP_SUCCESS,
  payload: {
    user: firebase.User,
    additionalData: {
      displayName: string
    }
  }
};

export interface SignUpFailureAction {
  type: typeof SIGN_UP_FAILURE,
  payload: ErrorMessage
};

export interface SignOutStartAction {
  type: typeof SIGN_OUT_START
};

export interface SignOutSuccessAction {
  type: typeof SIGN_OUT_SUCCESS
};

export interface SignOutFailureAction {
  type: typeof SIGN_OUT_FAILURE,
  payload: ErrorMessage
};

export interface CheckUserSessionAction {
  type: typeof CHECK_USER_SESSION
};

export type UserActionTypes = (
  GoogleSignInStartAction | EmailSignInStartAction | 
  SignInSuccessAction | SignInFailureAction |
  SignUpStartAction | SignUpSuccessAction | SignUpFailureAction | 
  SignOutStartAction | SignOutSuccessAction | SignOutFailureAction |
  CheckUserSessionAction
);
