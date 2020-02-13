import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles';

export const FormInput = ({handleChange, label, ...otherProps}) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    { label ? (
      <FormInputLabel>{label}</FormInputLabel>
    ) : null }
  </GroupContainer>
);
