import React from 'react';
import { shallow } from 'enzyme';

import { FormInput } from './form-input.component';
import { FormInputContainer, FormInputLabel } from './form-input.styles';

describe('FormInput component', () => {
  let wrapper;
  let mockHandleChange;
  let mockProps;

  beforeEach(() => {
    mockHandleChange = jest.fn();

    mockProps = {
      label: 'email',
      value: 'test@gmail.com',
      handleChange: mockHandleChange
    };

    wrapper = shallow(<FormInput {...mockProps} />);
  });

  it('should render FormInput component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should properly render FormInputContainer with onChange equal handleChange and prop destructuring', () => {
    expect(wrapper.exists(FormInputContainer)).toBe(true);
    expect(wrapper.find(FormInputContainer).prop('onChange')).toBe(mockProps.handleChange);
    expect(wrapper.find(FormInputContainer).prop('value')).toBe(mockProps.value);
  });

  it('should render label with label prop if label is present', () => {
    expect(wrapper.exists(FormInputLabel)).toBe(true);
    expect(wrapper.find(FormInputLabel).text()).toEqual(mockProps.label);
  });

  it('should not render label if label prop is null', () => {
    const mockProps = {
      label: null,
      value: 'test@gmail.com',
      handleChange: mockHandleChange
    };

    const newWrapper = shallow(<FormInput {...mockProps} />);
    expect(newWrapper.exists(FormInputLabel)).toBe(false);
  });

  it('should call handleChange with onChange on input change', () => {
    wrapper.find(FormInputContainer).simulate('change', { target: { name: 'email', value: 'test2@gmail.com' } });
    expect(mockHandleChange).toHaveBeenCalled();
  });
});