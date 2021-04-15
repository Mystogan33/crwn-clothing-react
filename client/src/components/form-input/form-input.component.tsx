import React, { ChangeEvent, FC } from 'react';

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

export const FormInput: FC<FormInputProps> = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    { label && <FormInputLabel>{label}</FormInputLabel> }
  </GroupContainer>
);
