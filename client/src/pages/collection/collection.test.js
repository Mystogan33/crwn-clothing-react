import React from 'react';
import { shallow } from 'enzyme';

import { CollectionPage } from './collection.component';
import { CollectionItem } from '../../components';
import { CollectionTitle } from './collection.styles';

describe('CollectionPage', () => {
  let wrapper;
  let mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const mockCollection = {
    items: mockItems,
    title: 'Test'
  };

  beforeEach(() => {
    wrapper = shallow(<CollectionPage collection={mockCollection} />);
  });

  it('should render the CollectionPage component', ()=> {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the same number of CollectionItems as collection array', () => {
    expect(wrapper.find(CollectionItem).length).toBe(mockItems.length);
  });

  it('should render the title correctly', () => {
    expect(wrapper.find(CollectionTitle).text()).toBe(mockCollection.title);
  });
});