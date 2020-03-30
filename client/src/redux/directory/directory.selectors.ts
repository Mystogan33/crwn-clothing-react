import { createSelector } from 'reselect';
import { RootState } from '../root-types';

const selectDirectory = (state: RootState) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
); 
