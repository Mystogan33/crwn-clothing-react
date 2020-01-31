import React , { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';
import { toggleNavbar } from '../../redux/header/header.actions';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectHeaderShowNavbar } from '../../redux/header/header.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { createStructuredSelector } from 'reselect';

import { CartIcon, CartDropdown } from '../index';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';


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
      <div className={`${showNavbar === true ? 'scrolled': '' } header`}>
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">SHOP</Link>
          <Link className="option" to="/shop">CONTACT</Link>
          {
            currentUser ?
            <div className="option" onClick={ () => auth.signOut() }>SIGN OUT</div> :
            <Link className="option" to="/signIn">
              SIGN IN
            </Link>
          }
          <CartIcon />
        </div>
        {
          hidden ? null : <CartDropdown />
        }
      </div>
    )
  }
);
