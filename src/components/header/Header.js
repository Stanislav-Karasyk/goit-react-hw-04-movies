import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

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
          <NavLink exact to="/movies" activeClassName="NavLinkActive">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Header);
