import * as ShopActions from './shop.actions';
import shopReducer from './shop.reducer';

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

describe('shopReducer', () => {
  it('should return initial state', () => {
    expect(shopReducer(undefined, {})).toEqual(initialState);
  });

  it('should set isFetching to true when fetchCollectionsStart', () => {
    expect(shopReducer(initialState, ShopActions.fetchCollectionsStart()).isFetching).toBe(true);
  });

  it('should set collections when fetchCollectionsSuccess', () => {
    const collections = [
      {
        id: 1,
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        name: "Mock Item 1",
        price: 99
      }
    ];

    expect(shopReducer(initialState, ShopActions.fetchCollectionsSuccess(collections)).collections).toBe(collections);
  });

  it('should set error when fetchCollectionsFailure', () => {
    const error = { errorMessage: 'Errored', code: 404 };
    expect(shopReducer(initialState, ShopActions.fetchCollectionsFailure(error)).errorMessage).toBe(error);
  });

  it('should set isFetching to false when fetchCollectionsSuccess or fetchCollectionsFailure', () => {
    expect(shopReducer(initialState, ShopActions.fetchCollectionsSuccess([])).isFetching).toBe(false);
    expect(shopReducer(initialState, ShopActions.fetchCollectionsFailure({})).isFetching).toBe(false);
  });
});
