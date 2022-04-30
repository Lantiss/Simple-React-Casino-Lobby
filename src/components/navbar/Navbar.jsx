import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
//import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="krb_navbar">
      <div className="krb_navbar-links">
        <div className="krb_navbar-links_container">
          <p><a href="#games">Games</a></p>
          <p><a href="#promotions">Promotions</a></p>
          <p><a href="#livecasino">Live Casino</a></p>
          <p><a href="#help">Help</a></p>
          <p><a href="#aboutus">About us</a></p>
        </div>
      </div>
      <div className="krb_navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="krb_navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="krb_navbar-menu_container scale-up-center">
          <div className="krb_navbar-menu_container-links">
            <p><a href="#games">Games</a></p>
            <p><a href="#promotions">Promotions</a></p>
            <p><a href="#livecasino">Live Casino</a></p>
            <p><a href="#help">Help</a></p>
            <p><a href="#aboutus">About us</a></p>
          </div>
          <div className="krb_navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
