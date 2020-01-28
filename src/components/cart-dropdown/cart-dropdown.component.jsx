import React from 'react';
import './cart-dropdown.styles.scss';
import { CustomButton } from '../index';

export const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT </CustomButton>
  </div>
);
