import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorMessage, SignInCredentials, SignUpCredentials, User } from '../../interfaces/interfaces';

export interface UserState {
  currentUser: User | null,
  error: ErrorMessage | null
};

const initialState: UserState = {
  currentUser: null,
  error: null
};

const onFailure = (state: UserState, { payload }: PayloadAction<ErrorMessage>) => {
  state.error = payload
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInSuccess: (state, { payload }: PayloadAction<User>) => {
      state.currentUser = payload;
      state.error = null;
    },
    signOutSuccess: (state) => {
      state.currentUser = null;
      state.error = null;
    },
    signInFailure: onFailure,
    signUpFailure: onFailure,
    signOutFailure: onFailure
  }
});

export const checkUserSession = createAction("user/checkUserSession");
export const signUpStart = createAction<SignUpCredentials>("user/signUpStart");
export const emailSignInStart = createAction<SignInCredentials>("user/emailSignInStart");
export const googleSignInStart = createAction("user/googleSignInStart");
export const signOutStart = createAction("user/signOutStart");
export const signUpSuccess = createAction<{
  user: firebase.User,
  additionalData: {
    displayName: string
  }
}>("user/signUpSuccess");

export const { signInSuccess, signOutSuccess, signInFailure, signUpFailure, signOutFailure } = userSlice.actions;

export default userSlice.reducer;