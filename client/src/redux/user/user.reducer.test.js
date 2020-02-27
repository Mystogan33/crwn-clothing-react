import UserActionTypes from './user.types';
import * as UserActions from './user.actions';
import userReducer from './user.reducer';

const initialState = {
  currentUser: null,
  error: null
};

describe('userReducer', () => {
  it('should return initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it('should set currentUser to payload on signInSuccess action', () => {
    const mockUser = { id: 1, displayName: 'Yihua' };
    expect(userReducer(initialState, UserActions.signInSuccess(mockUser)).currentUser).toEqual(mockUser);
  });

  it('should set currentUser to null on signOutSuccess action', () => {
    expect(userReducer(initialState, UserActions.signOutSuccess()).currentUser).toBe(null);
  });

  it('should set errorMessage to payload on signInFailure, signUpFailure, signOutFailure action', () => {
    const mockError =  {
      message: 'errored',
      code: 404
    };

    expect(userReducer(initialState, UserActions.signInFailure(mockError)).error).toBe(mockError);
    expect(userReducer(initialState, UserActions.signUpFailure(mockError)).error).toBe(mockError);
    expect(userReducer(initialState, UserActions.signOutFailure(mockError)).error).toBe(mockError);
  });
});
