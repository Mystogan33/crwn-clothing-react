import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { CartIcon } from '../cart-icon/cart-icon.component';
import { CartDropdown } from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

export const HeaderComponent = ({
  currentUser,
  hidden,
  location: { pathname },
  signOutStart }) => {

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const scrollListener = (event) => {
      if(window.scrollY <= 75 && showNavbar === true) {
        setShowNavbar(false);
      } else if(window.scrollY > 75 && showNavbar === false) {
        setShowNavbar(true);
      }
    };

    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  });

    return (
      <HeaderContainer className={`${showNavbar === true ? 'scrolled': '' }`}>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to="/shop" active={pathname}>SHOP</OptionLink>
          <OptionLink to="/contact" active={pathname}>CONTACT</OptionLink>
          { currentUser
            ? <OptionLink as='div' onClick={signOutStart}> SIGN OUT </OptionLink>
            : <OptionLink to="/signIn" active={pathname}> SIGN IN </OptionLink>
          }
          <CartIcon />
        </OptionsContainer>
        {
          hidden ? null : <CartDropdown />
        }
      </HeaderContainer>
    )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export const Header = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(HeaderComponent);
