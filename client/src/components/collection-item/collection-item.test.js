import React from 'react';
import { shallow } from 'enzyme';

import { CollectionItem } from './collection-item.component';
import { BackgroundImage, CollectionFooterContainer, NameContainer, PriceContainer, AddButton } from './collection-item.styles';

describe('Collection Item Component', () => {
  let wrapper;
  let mockItem;
  let mockProps;
  let mockAddItem;

  beforeEach(() => {

    mockItem = {
      id: 999,
      imageUrl: "https://testimage.com",
      name: "Mock item",
      price: 25,
      quantity: 1
    };

    mockAddItem = jest.fn();

    mockProps = {
      item: mockItem,
      addItem: mockAddItem
    };

    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  it('should render Collection Item component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should properly render BackgroundImage and render it with imageUrl and className equal to "image"', () => {
    expect(wrapper.exists(BackgroundImage)).toBe(true);
    expect(wrapper.find(BackgroundImage).prop('className')).toEqual('image');
    expect(wrapper.find(BackgroundImage).prop('imageUrl')).toEqual(mockItem.imageUrl);
  });

  it('should properly render CollectionFooterContainer', () => {
    expect(wrapper.exists(CollectionFooterContainer)).toBe(true);
    expect(wrapper.find(CollectionFooterContainer).exists(NameContainer)).toBe(true);
    expect(wrapper.find(CollectionFooterContainer).exists(PriceContainer)).toBe(true);
  });

  it('should render NameContainer with item name', () => {
    expect(wrapper.find(NameContainer).text()).toBe(mockItem.name);
  });

  it('should render PriceContainer with item price', () => {
    expect(wrapper.find(PriceContainer).text()).toBe(`$${mockItem.price.toString()}`);
  });

  it('should properly render AddButton', () => {
    expect(wrapper.exists(AddButton)).toBe(true);
  });

  it('should trigger mockAddItem when AddButton is clicked', () => {
    wrapper.find(AddButton).simulate('click');
    expect(mockAddItem).toHaveBeenCalledWith(mockItem);
  });
});