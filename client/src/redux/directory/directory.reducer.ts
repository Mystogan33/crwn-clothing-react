import { DIRECTORY_DATA } from './directory.data';
import { ICategory } from '../../interfaces/interfaces';

export type IDirectoryState = {
  sections: ICategory[]
};

const INITIAL_STATE: IDirectoryState = {
  sections: DIRECTORY_DATA
};

const directoryReducer = (state = INITIAL_STATE, action: any) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
