import { createSelector } from 'reselect';
import { RootStateOrAny } from 'react-redux';

const selectUser = (state: any) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
