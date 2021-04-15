import { createSlice } from '@reduxjs/toolkit';
import { ICategories } from '../../interfaces/interfaces';
import { DIRECTORY_DATA } from './directory.data';

interface DirectoryState {
  sections: ICategories
};

const initialState: DirectoryState = {
  sections: DIRECTORY_DATA
};

export const directorySlice = createSlice({
  name: 'directory',
  initialState,
  reducers: {}
});

export default directorySlice.reducer;