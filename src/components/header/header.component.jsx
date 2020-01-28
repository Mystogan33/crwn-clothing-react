import React , { useEffect } from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { CartIcon, CartDropdown } from '../index';
import { toggleNavbar } from '../../redux/header/header.actions';


const mapStateToProps = ({ user: { currentUser }, cart: { hidden }, header: { showNavbar }}) => ({
  currentUser,
  hidden,
  showNavbar
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
