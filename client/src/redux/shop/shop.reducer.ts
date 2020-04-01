import { ShopActionTypes, ShopState, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE } from './shop.types';

const INITIAL_STATE: ShopState = {
  collections: null,
  isFetching: false,
  errorMessage: null
};

const shopReducer = (state = INITIAL_STATE, action: ShopActionTypes) => {
  switch(action.type) {
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      }
    case FETCH_COLLECTIONS_FAILURE:
    return {
      ...state,
      isFetching: false,
      errorMessage: action.payload
    }
    default:
      return state;
  }
};

export default shopReducer;
