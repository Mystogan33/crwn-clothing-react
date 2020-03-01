import React from 'react';
import { shallow } from 'enzyme';

import { HeaderComponent } from './header.component';
import { OptionLink } from './header.styles';
import { CartDropdown } from '../cart-dropdown/cart-dropdown.component';

describe('Header component', () => {
  let wrapper;
  let mockSignOutStart;
  let mockLocation = { pathname: '/' };

  beforeEach(() => {
    mockSignOutStart = jest.fn();
    const mockCurrentUser = { uid: '123' };
    const mockProps = {
      hidden: true,
      currentUser: mockCurrentUser,
      signOutStart: mockSignOutStart,
      location: mockLocation
    };

    wrapper = shallow(<HeaderComponent {...mockProps} />);
  });

  it('should render Header Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('if currentUser is present', () => {
    it('should render sign out link', () => {
      expect(wrapper.find(OptionLink).at(2).text()).toBe('SIGN OUT');
    });

    it('should call signOutStart method when link is clicked', () => {
      wrapper.find(OptionLink).at(2).simulate('click');
      expect(mockSignOutStart).toHaveBeenCalled();
    });
  });

  describe('if currentUser is null', () => {
    it('should render sign in link', () => {

      const mockProps = {
        hidden: true,
        currentUser: null,
        signOutStart: mockSignOutStart,
        location: mockLocation
      };

      const newWrapper = shallow(<HeaderComponent {...mockProps} />);
      expect(newWrapper.find(OptionLink).at(2).text()).toBe('SIGN IN');
    });
  });

  describe('if hidden is true', () => {
    it('should not render CartDropdown', () => {

      const mockProps = {
        hidden: true,
        currentUser: null,
        signOutStart: mockSignOutStart,
        location: mockLocation
      };

      const newWrapper = shallow(<HeaderComponent {...mockProps} />);
      expect(newWrapper.exists(CartDropdown)).toBe(false);
    });
  });

  describe('if hidden is false', () => {
    it('should render CartDropdown', () => {

      const mockProps = {
        hidden: false,
        currentUser: null,
        signOutStart: mockSignOutStart,
        location: mockLocation
      };

      const newWrapper = shallow(<HeaderComponent {...mockProps } />);
      expect(newWrapper.exists(CartDropdown)).toBe(true);
    });
  });
});