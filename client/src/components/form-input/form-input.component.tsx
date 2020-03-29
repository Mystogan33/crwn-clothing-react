import React, { FC } from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles';

type IFormInputProps = {
  handleChange: Function,
  label: string,
  [x: string]: any
};

export const FormInput: FC<IFormInputProps> = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    { label ? (
      <FormInputLabel>{label}</FormInputLabel>
    ) : null }
  </GroupContainer>
);
