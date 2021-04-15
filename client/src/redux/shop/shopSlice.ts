import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorMessage, ICollections } from '../../interfaces/interfaces';

export interface ShopState {
  collections: ICollections | null,
  isFetching: boolean,
  errorMessage: ErrorMessage | null
};

const initialState: ShopState = {
  collections: null,
  isFetching: false,
  errorMessage: null
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    fetchCollectionsStart: (state) => {
      state.isFetching = true;
    },
    fetchCollectionsSuccess: (state, { payload }: PayloadAction<ICollections>) => {
      state.isFetching = false;
      state.collections = payload;
    },
    fetchCollectionsFailure: (state, { payload }: PayloadAction<ErrorMessage>) => {
      state.isFetching = false;
      state.errorMessage = payload;
    }
  }
});

export const { fetchCollectionsStart, fetchCollectionsSuccess, fetchCollectionsFailure } = shopSlice.actions;
export default shopSlice.reducer;