import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="NavLinkActive">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movie" activeClassName="NavLinkActive">
            Movie
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
