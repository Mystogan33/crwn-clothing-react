import React, { ReactChildren } from 'react';
import { CustomButtonContainer } from './custom-button.styles';

interface CustomButtonProps {
  children: ReactChildren;
  [x: string]: any;
};

export const CustomButton = ({ children, ...otherProps }: CustomButtonProps) => (
  <CustomButtonContainer {...otherProps}>
    {children}
  </CustomButtonContainer>
);
