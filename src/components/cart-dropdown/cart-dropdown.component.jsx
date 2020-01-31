import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { CustomButton, CartItem } from '../index';
import './cart-dropdown.styles.scss';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export const CartDropdown = withRouter(connect(mapStateToProps, mapDispatchToProps)(
  ({ cartItems, toggleCartHidden, history }) => (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length
          ? cartItems.map(item => <CartItem key={item.id} item={item} />)
          : <span className="empty-message">Your cart is empty</span>
        }
      </div>
      <CustomButton
        onClick={() => {
          toggleCartHidden();
          history.push('/checkout');
        }}>GO TO CHECKOUT</CustomButton>
    </div>
  )
));
