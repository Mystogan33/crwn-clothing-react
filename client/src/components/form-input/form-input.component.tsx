import React, { ChangeEvent } from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles';

interface FormInputProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
  label: string,
  [x: string]: any
};

export const FormInput = ({ handleChange, label, ...otherProps }: FormInputProps) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    { label ? (
      <FormInputLabel>{label}</FormInputLabel>
    ) : null }
  </GroupContainer>
);
