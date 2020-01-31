import React from 'react';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';
import { CustomButton } from '../index';
import { CartItem } from '../index';

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
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
