import ShopActionTypes from './shop.types';

import {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
  fetchCollectionsStartAsync
} from './shop.actions';

describe('fetchCollectionsStart action', () => {
  it('should create the fetchCollectionsStart action', () => {
    expect(fetchCollectionsStart().type)
      .toEqual(ShopActionTypes.FETCH_COLLECTIONS_START);
  });
});

describe('fetchCollectionsSuccess action', () => {
  it('should create the fetchCollectionsSuccess action', () => {
    const mockCollectionsMap = {
      hats: { 
        id: 1,
        title: 'Hats',
        items: []
      }
    };

    const action = fetchCollectionsSuccess(mockCollectionsMap);
    expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_SUCCESS);
    expect(action.payload).toEqual(mockCollectionsMap);
  });
});

describe('fetchCollectionsFailure action', () => {
  it('should create the fetchCollectionsFailure action', () => {
    const action = fetchCollectionsFailure('error');
    
    expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_FAILURE);
    expect(action.payload).toEqual('error');
  });
});