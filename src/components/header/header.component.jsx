import React , { useEffect } from 'react';

import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';
import { toggleNavbar } from '../../redux/header/header.actions';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectHeaderShowNavbar } from '../../redux/header/header.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { createStructuredSelector } from 'reselect';

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
  toggleNavbar: isScrolled => dispatch(toggleNavbar(isScrolled))
});

export const Header = connect(mapStateToProps, mapDispatchToProps)(
  ({ currentUser, hidden, showNavbar, toggleNavbar }) => {

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
          <OptionLink to="/shop">SHOP</OptionLink>
          <OptionLink to="/shop">CONTACT</OptionLink>
          {
            currentUser ?
            <OptionLink as='div' onClick={ () => auth.signOut() }>SIGN OUT</OptionLink> :
            <OptionLink to="/signIn">
              SIGN IN
            </OptionLink>
          }
          <CartIcon />
        </OptionsContainer>
        {
          hidden ? null : <CartDropdown />
        }
      </HeaderContainer>
    )
  }
);
