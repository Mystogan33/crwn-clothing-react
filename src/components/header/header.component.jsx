import React , { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { toggleNavbar } from '../../redux/header/header.actions';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectHeaderShowNavbar } from '../../redux/header/header.selectors';
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


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  showNavbar: selectHeaderShowNavbar
});

const mapDispatchToProps = dispatch => ({
  toggleNavbar: isScrolled => dispatch(toggleNavbar(isScrolled)),
  signOutStart: () => dispatch(signOutStart())
});

export const HeaderComponent = ({ currentUser, hidden, showNavbar, toggleNavbar, history, signOutStart }) => {

    useEffect(() => {
      window.addEventListener('scroll', () => {
        const isTop = (window.scrollY > 75);
        if(isTop !== showNavbar) {
          toggleNavbar(isTop);
        }
      });
    });

    return (
      <HeaderContainer className={`${showNavbar === true ? 'scrolled': '' }`}>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to="/shop" active={history}>SHOP</OptionLink>
          <OptionLink to="/contact" active={history}>CONTACT</OptionLink>
          { currentUser
            ? <OptionLink as='div' onClick={signOutStart}> SIGN OUT </OptionLink>
            : <OptionLink to="/signIn" active={history}> SIGN IN </OptionLink>
          }
          <CartIcon />
        </OptionsContainer>
        {
          hidden ? null : <CartDropdown />
        }
      </HeaderContainer>
    )
};

export const Header = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(HeaderComponent);
