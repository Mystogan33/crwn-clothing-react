import { DIRECTORY_DATA } from './directory.data';
import { DirectoryState } from './directory.type';
import { Action } from 'redux';

const INITIAL_STATE: DirectoryState = {
  sections: DIRECTORY_DATA
};

const directoryReducer = (state = INITIAL_STATE, action: Action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
