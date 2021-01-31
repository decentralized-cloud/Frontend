import React from 'react';
import LogoutButton from './logout-button';
import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <div className="navbar-nav ml-auto">
    <NavLink to="/profile" exact className="nav-link" activeClassName="router-link-exact-active">
      Profile
    </NavLink>
    <LogoutButton />
  </div>
);

export default AuthNav;
