import React from 'react';
import { mount, shallow } from 'enzyme';
import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider }  from 'react-redux';

import { ShopPage } from './shop.component';

// export const createMockStore = ({ state, reducers }) => {
//   const store = createStore(combineReducers(reducers), state);
//   return {
//     ...store,
//     persistor: {
//       persist: () => null
//     }
//   };
// };

describe('ShopPage', () => {
  let wrapper;
  let mockFetchCollectionStart;
  let store;

  beforeEach(() => {
    // const mockReducer = (
    //   state = {
    //     isFetching: true
    //   },
    //   action
    // ) => state;

    // const mockState = {
    //   shop: {
    //     isFetching: true
    //   }
    // };

    mockFetchCollectionStart = jest.fn();

    // store = createMockStore({
    //   state: mockState,
    //   reducers: { shop: mockReducer }
    // });

    const mockMatch = {
      path: ''
    };

    const mockProps = {
      match: mockMatch,
      fetchCollectionsStart: mockFetchCollectionStart
    };

    wrapper = mount(
    //   <Provider store={store}>
        <BrowserRouter>
          <ShopPage {...mockProps} />
        </BrowserRouter>
    //   </Provider>
    );
  });

  it('should render ShopPage component', () => {
    expect(wrapper).toMatchSnapshot();
    expect(mockFetchCollectionStart).toHaveBeenCalled();
  });
});



