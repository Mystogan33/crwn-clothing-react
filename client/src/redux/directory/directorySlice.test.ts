import directoryReducer from './directorySlice';
import { DIRECTORY_DATA } from './directory.data';

const initialState = {
  sections: DIRECTORY_DATA
};

describe('directoryReducer', () => {
  it('should return initial state', () => {
    expect(directoryReducer(undefined, { type: undefined })).toEqual(initialState);
  })
});