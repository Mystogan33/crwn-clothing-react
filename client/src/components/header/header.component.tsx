import React, { FC, useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/userSlice';

import { CartIcon } from '../cart-icon/cart-icon.component';
import { CartDropdown } from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

type HeaderProps = RouteComponentProps;

export const HeaderComponent: FC<HeaderProps> = ({ location: { pathname } }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const dispatch = useAppDispatch();
  const startSignout = () => dispatch(signOutStart());
  
  const currentUser = useAppSelector(selectCurrentUser);
  const hidden = useAppSelector(selectCartHidden);

  useEffect(() => {
    const scrollListener = (event: Event) => {
      if(window.scrollY <= 75 && showNavbar === true) setShowNavbar(false);
      else if(window.scrollY > 75 && showNavbar === false) setShowNavbar(true);
    };

    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  });
  
  const renderedSignInLink = currentUser
    ? <OptionLink as='div' onClick={startSignout}>SIGN OUT</OptionLink>
    : <OptionLink to="/signIn" active={pathname}>SIGN IN</OptionLink>;

    return (
      <HeaderContainer className={`${showNavbar === true ? 'scrolled': '' }`}>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to="/shop" active={pathname}>SHOP</OptionLink>
          <OptionLink to="/contact" active={pathname}>CONTACT</OptionLink>
          { renderedSignInLink }
          <CartIcon />
        </OptionsContainer>
        { !hidden && <CartDropdown /> }
      </HeaderContainer>
    )
};

export const Header = withRouter(HeaderComponent);
