import React from 'react';
import { shallow } from 'enzyme';
import { CollectionsOverviewCmp } from './collections-overview.component';
import { CollectionPreview } from '../collection-preview/collection-preview.component';

describe('CollectionsOverview component', () => {
  let wrapper;
  let mockCollections;

  beforeEach(() => {

    mockCollections = [
      {
        id: 1,
        title: 'MockCollection1',
        items: [
          {
            id: 998,
            imageUrl: 'https://testimage.com',
            name: 'MockItem 1',
            price: 325
          }
        ]
      },
      {
        id: 2,
        title: 'MockCollection2',
        items: [
          {
            id: 999,
            imageUrl: 'https://testimage.com',
            name: 'MockItem 1',
            price: 325
          }
        ]
      }
    ];

    wrapper = shallow(<CollectionsOverviewCmp collections={mockCollections} />);
  });

  
  it('should render CollectionsOverview component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render number of CollectionPreview equal to collections prop length', () => {
    expect(wrapper.exists(CollectionPreview)).toBe(true);
    expect(wrapper.find(CollectionPreview).length).toEqual(mockCollections.length);
  });

  it('should not render any CollectionPreview if collections prop is empty', () => {
    const newWrapper = shallow(<CollectionsOverviewCmp collections={[]} />);
    expect(newWrapper.exists(CollectionPreview)).toBe(false);
  });
});
