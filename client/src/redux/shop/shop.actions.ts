import { ShopActionTypes, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_FAILURE, FETCH_COLLECTIONS_SUCCESS } from './shop.types';
import { ICollections, ErrorMessage } from '../../interfaces/interfaces';

export const fetchCollectionsStart = (): ShopActionTypes => ({
  type: FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap: ICollections): ShopActionTypes => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage: ErrorMessage): ShopActionTypes => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});