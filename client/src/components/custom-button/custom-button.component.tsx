import React, { FC } from 'react';
import { CustomButtonContainer } from './custom-button.styles';

type ICustomButtonProps = {
  [x: string]: any
};

export const CustomButton: FC<ICustomButtonProps> = ({children, ...otherProps}) => (
  <CustomButtonContainer {...otherProps}>
    {children}
  </CustomButtonContainer>
);
