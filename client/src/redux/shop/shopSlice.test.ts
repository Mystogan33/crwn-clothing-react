import { fetchCollectionsFailure, fetchCollectionsStart, fetchCollectionsSuccess } from './shopSlice';
import shopReducer from './shopSlice';

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: null
};

describe('shopReducer', () => {
  
  it('should return initial state', () => {
    expect(shopReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should set isFetching to true when fetchCollectionsStart action', () => {
    expect(shopReducer(initialState, fetchCollectionsStart()).isFetching).toBe(true);
  });

  it('should set isFetching to false and set collections when fetchCollectionsSuccess action', () => {
    const mockCollections: any = [
      {
        title: "Mens",
        routeName: "/mens",
        items: [
          {
            id: 1,
            imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
            name: "Mock Item 1",
            price: 99
          }
        ]
      }
    ];

    expect(shopReducer(initialState, fetchCollectionsSuccess(mockCollections)))
      .toEqual({
        ...initialState,
        isFetching: false,
        collections: mockCollections
      });
  });

  it('should set isFetching to false and set error when fetchCollectionsFailure', () => {
    expect(shopReducer(initialState, fetchCollectionsFailure('error')))
    .toEqual({
      ...initialState,
      isFetching: false,
      errorMessage: 'error'
    });
  });

});