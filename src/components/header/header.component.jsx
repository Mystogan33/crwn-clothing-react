import React , { useEffect, useState } from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

export const Header = ({ currentUser }) => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY > 100;
      if (isTop !== isScrolled) {
          setIsScrolled(isTop);
      }
    });
  });

  return (
    <div className={`${isScrolled === true ? 'scrolled': '' } header`}>
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
      </div>
    </div>
  )
};
