import userReducer, { signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure } from './userSlice';

const initialState = {
  currentUser: null,
  error: null
};

describe('userReducer', () => {
  it('should return initial state', () => {
    expect(userReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should set currentUser to payload on signInSuccess action', () => {
    const mockUser = { id: "1" };
    expect(userReducer(initialState, signInSuccess(mockUser)).currentUser).toEqual(mockUser);
  });

  it('should set currentUser to null on signOutSuccess action', () => {
    expect(userReducer(initialState, signOutSuccess()).currentUser).toBe(null);
  });

  it('should set errorMessage to payload on signInFailure, signUpFailure, signOutFailure action', () => {
    const mockError = {
      message: 'errored',
      code: 404,
      name: "ERRORED"
    };

    expect(userReducer(initialState, signInFailure(mockError)).error).toBe(mockError);
    expect(userReducer(initialState, signUpFailure(mockError)).error).toBe(mockError);
    expect(userReducer(initialState, signOutFailure(mockError)).error).toBe(mockError);
  });
});
