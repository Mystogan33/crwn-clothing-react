import { createSelector } from 'reselect';

const selectHeader = state => state.header;

export const selectHeaderShowNavbar = createSelector(
  [selectHeader],
  header => header.showNavbar
);
