import * as ShopActions from './shop.actions';
import shopReducer from './shop.reducer';

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: null
};

describe('shopReducer', () => {
  
  it('should return initial state', () => {
    expect(shopReducer(undefined, {})).toEqual(initialState);
  });

  it('should set isFetching to true when fetchCollectionsStart action', () => {
    expect(shopReducer(initialState, ShopActions.fetchCollectionsStart()).isFetching).toBe(true);
  });

  it('should set isFetching to false and set collections when fetchCollectionsSuccess action', () => {
    const mockCollections = [
      {
        id: 1,
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        name: "Mock Item 1",
        price: 99
      }
    ];

    expect(shopReducer(initialState, ShopActions.fetchCollectionsSuccess(mockCollections)))
      .toEqual({
        ...initialState,
        isFetching: false,
        collections: mockCollections
      });
  });

  it('should set isFetching to false and set error when fetchCollectionsFailure', () => {
    expect(shopReducer(initialState, ShopActions.fetchCollectionsFailure('error')))
    .toEqual({
      ...initialState,
      isFetching: false,
      errorMessage: 'error'
    });
  });

});
