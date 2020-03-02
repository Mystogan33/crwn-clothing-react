import React from 'react';
import { shallow } from 'enzyme';
import { DirectoryComponent } from './directory.component';
import { DIRECTORY_DATA } from '../../redux/directory/directory.data';
import { MenuItem } from '../menu-item/menu-item.component';

describe('Directory component', () => {
  let wrapper;
  let mockSections;

  beforeEach(() => {
    mockSections = DIRECTORY_DATA;
    wrapper = shallow(<DirectoryComponent sections={mockSections} />);
  });

  it('should render Directory component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a number of MenuItem equal to sections prop length', () => {
    expect(wrapper.exists(MenuItem)).toBe(true);
    expect(wrapper.find(MenuItem).length).toEqual(mockSections.length);
  });

  it('should not render any MenuItem if sections is empty', () => {
    const newWrapper = shallow(<DirectoryComponent sections={[]} />);
    expect(newWrapper.exists(MenuItem)).toBe(false);
  });
});