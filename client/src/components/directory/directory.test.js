import React from 'react';
import { shallow } from 'enzyme';
import { Directory } from './directory.component';
import { MenuItem } from '../menu-item/menu-item.component';

describe('Directory component', () => {
  let wrapper;
  let mockSections;

  beforeEach(() => wrapper = shallow(<Directory />));

  it('should render Directory component', () => expect(wrapper).toMatchSnapshot());

  it('should render a number of MenuItem equal to sections prop length', () => {
    expect(wrapper.exists(MenuItem)).toBe(true);
    expect(wrapper.find(MenuItem).length).toEqual(mockSections.length);
  });

  it('should not render any MenuItem if sections is empty', () => {
    const newWrapper = shallow(<DirectoryComponent sections={[]} />);
    expect(newWrapper.exists(MenuItem)).toBe(false);
  });
});