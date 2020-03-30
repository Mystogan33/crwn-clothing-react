import { createSelector } from 'reselect';
import { AppState } from '../root-types';

const selectShop = (state: AppState) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections => (
    collections
    ? Object.keys(collections).map(key => collections[key])
    : []
  )
)

export const selectCollection = (collectionUrlParam: string) => (
  createSelector(
    [selectShopCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  )
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);
