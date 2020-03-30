import { createSelector } from 'reselect';
import { RootState } from '../root-reducer';

const selectUser = (state: RootState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
