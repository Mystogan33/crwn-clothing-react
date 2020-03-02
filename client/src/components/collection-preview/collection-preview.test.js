import React from 'react';
import { shallow } from 'enzyme';

import { CollectionPreviewComponent } from './collection-preview.component';
import { TitleContainer } from './collection-preview.styles';
import { CollectionItem } from '../collection-item/collection-item.component';

describe('CollectionPreview component', () => {
  let wrapper;
  let mockMatch;
  let mockProps;
  const mockRouteName = 'hats';

  beforeEach(() => {
    mockMatch = {
      path: '/shop'
    };

    mockProps = {
      match: mockMatch,
      routeName: mockRouteName,
      title: 'hats',
      items: []
    };

    wrapper = shallow(<CollectionPreviewComponent {...mockProps} />);
  });

  it('should render CollectionPreview component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should properly render TitleContainer with the match & routeName props', () => {
    expect(wrapper.exists(TitleContainer)).toBe(true);
    expect(wrapper.find(TitleContainer).prop('to')).toBe(`${mockMatch.path}/${mockRouteName}`);
  });

  it('should render the correct number of CollectionItem equal to props items length', () => {
    expect(wrapper.find(CollectionItem).length).toEqual(mockProps.items.length);
  });
});