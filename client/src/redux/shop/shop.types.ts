import { ICollections, ErrorMessage } from "../../interfaces/interfaces";

export interface ShopState {
  collections: ICollections | null,
  isFetching: boolean,
  errorMessage: ErrorMessage | null
};

export const FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START';
export const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS';
export const FETCH_COLLECTIONS_FAILURE = 'FETCH_COLLECTIONS_FAILURE';

interface FetchCollectionsStartAction {
  type: typeof FETCH_COLLECTIONS_START
};

interface FetchCollectionsSuccessAction {
  type: typeof FETCH_COLLECTIONS_SUCCESS,
  payload: ICollections
};

interface FetchCollectionsFailureAction {
  type: typeof FETCH_COLLECTIONS_FAILURE,
  payload: ErrorMessage
};

export type ShopActionTypes = FetchCollectionsStartAction | FetchCollectionsSuccessAction | FetchCollectionsFailureAction;
