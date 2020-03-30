import { createSelector } from 'reselect';
import { AppState } from '../root-types';

const selectUser = (state: AppState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
