import React from 'react';
import { CustomButtonContainer } from './custom-button.styles';

interface CustomButtonProps {
  [x: string]: any;
};

export const CustomButton = ({ children, ...otherProps }: CustomButtonProps) => (
  <CustomButtonContainer {...otherProps}>
    {children}
  </CustomButtonContainer>
);
