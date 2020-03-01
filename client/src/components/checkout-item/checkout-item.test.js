import React from 'react';
import { shallow } from 'enzyme';
import { CheckoutItemComponent } from './checkout-item.component';

import { ImageContainer, TextContainer, QuantityContainer, RemoveButtonContainer } from './checkout-item.styles';

describe('CheckoutItem component', () => {

  let wrapper;
  let mockItem;
  let mockProps;
  let mockClearItemFromCart;
  let mockAddItem;
  let mockRemoveItemFromCart;

  beforeEach(() => {
    mockItem = {
      imageUrl: 'www.testImage.com',
      price: 10,
      name: 'hats',
      quantity: 2
    };
  
    mockClearItemFromCart = jest.fn();
    mockAddItem = jest.fn();
    mockRemoveItemFromCart = jest.fn();

    mockProps = {
      cartItem: mockItem,
      addItem: mockAddItem,
      removeItem: mockRemoveItemFromCart,
      clearItemFromCart: mockClearItemFromCart
    }

    wrapper = shallow(<CheckoutItemComponent {...mockProps} />);
  });

  it('should render CheckoutItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ImageContainer with the cartItem image', () => {
    expect(wrapper.find(ImageContainer).find('img').prop('src')).toEqual(mockItem.imageUrl);
  });

  it('should render TextContainer with the cartItem name', () => {
    expect(wrapper.find(TextContainer).at(0).text()).toEqual(mockItem.name);
  });

  it('should render TextContainer with the cartItem price', () => {
    expect(wrapper.find(TextContainer).at(1).text()).toEqual(mockItem.price.toString());
  });

  it('should call removeItem when left arrow is clicked', () => {
    wrapper.find(QuantityContainer).childAt(0).simulate('click');
    expect(mockRemoveItemFromCart).toHaveBeenCalledWith(mockItem);
  });

  it('should call addItem when right arrow is clicked', () => {
    wrapper.find(QuantityContainer).childAt(2).simulate('click');
    expect(mockAddItem).toHaveBeenCalledWith(mockItem);
  });

  it('should call clearItem when remove button is clicked', () => {
    wrapper.find(RemoveButtonContainer).simulate('click');
    expect(mockClearItemFromCart).toHaveBeenCalledWith(mockItem);
  });
  
});