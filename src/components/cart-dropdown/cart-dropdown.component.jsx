import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import { CustomButton, CartItem } from '../index';
import './cart-dropdown.styles.scss';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export const CartDropdown = connect(mapStateToProps)(
  ({ cartItems }) => (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
);
