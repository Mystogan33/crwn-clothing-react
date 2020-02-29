import React from 'react';
import { shallow } from 'enzyme';
import { CheckoutPage } from './checkout.component';
import { CheckoutItem } from '../../components';

describe('checkout Component', () => {
  let wrapper;
  let mockCartItems = [];
  
  beforeEach(() => {
    const mockProps = {
      cartItems: mockCartItems,
      total: 100
    };

    wrapper = shallow(<CheckoutPage {...mockProps} />);
  });

  it('should render CheckoutPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the correct number of checkout item', () => {
    expect(wrapper.find(CheckoutItem).length).toEqual(mockCartItems.length);
  });
});