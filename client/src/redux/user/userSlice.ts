import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import firebase from 'firebase';
import { ErrorMessage, SignInCredentials, SignUpCredentials, User } from '../../interfaces/interfaces';
import { CHECK_USER_SESSION, EMAIL_SIGN_IN_START, GOOGLE_SIGN_IN_START, SIGN_IN_SUCCESS, SIGN_OUT_START, SIGN_UP_START, UserState } from './user.types';

const initialState: UserState = {
  currentUser: null,
  error: null
};

const onFailure = (state: UserState, { payload }: PayloadAction<ErrorMessage>) => {
  state.error = payload;
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInSuccess: ({ currentUser, error }, { payload }: PayloadAction<User>) => {
      currentUser = payload;
      error = null;
    },
    signOutSuccess: ({ currentUser, error }) => {
      currentUser = null;
      error = null;
    },
    signInFailure: onFailure,
    signUpFailure: onFailure,
    signOutFailure: onFailure
  }
});

export const checkUserSession = createAction(CHECK_USER_SESSION);
export const signUpStart = createAction<SignUpCredentials>(SIGN_UP_START);
export const emailSignInStart = createAction<SignInCredentials>(EMAIL_SIGN_IN_START);
export const googleSignInStart = createAction(GOOGLE_SIGN_IN_START);
export const signOutStart = createAction(SIGN_OUT_START);
export const signUpSuccess = createAction<{ user: firebase.User, additionalData: User["additionalData"]}>(SIGN_IN_SUCCESS);

export const { signInSuccess, signOutSuccess, signInFailure, signUpFailure, signOutFailure } = userSlice.actions;

export default userSlice.reducer;