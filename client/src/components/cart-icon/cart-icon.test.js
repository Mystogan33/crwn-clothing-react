import React from 'react';
import { shallow } from 'enzyme';

import { CartIconCmp } from './cart-icon.component';
import { CartContainer, ItemCountContainer } from './cart-icon.styles';

describe('CartIcon component', () => {
  let wrapper;
  let mockToggleCartHidden;

  beforeEach(() => {
    mockToggleCartHidden = jest.fn();

    const mockProps = {
      itemCount: 0,
      toggleCartHidden: mockToggleCartHidden
    };

    wrapper = shallow(<CartIconCmp {...mockProps} />);
  });

  it('should render CartIcon component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call toggleCartHidden when is icon is clicked', () => {
    wrapper.find(CartContainer).simulate('click');
    expect(mockToggleCartHidden).toHaveBeenCalled();
  });

  it('should render the itemCount as the text', () => {
    const text = wrapper.find(ItemCountContainer).text();
    const itemCount = parseInt(text);
    expect(itemCount).toBe(0);
  });
});