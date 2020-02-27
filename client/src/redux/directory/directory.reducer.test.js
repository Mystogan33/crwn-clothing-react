import directoryReducer from './directory.reducer';
import { DIRECTORY_DATA } from './directory.data';

const initialState = {
  sections: DIRECTORY_DATA
};

describe('directoryReducer', () => {
  it('should return initial state', () => {
    expect(directoryReducer(undefined, {})).toEqual(initialState);
  })
});