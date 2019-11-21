import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom'


export default function Navigation () {
  return (
    <div className="nav">
      <header className="nav-footer">
        <ul className="ul-style-footer">
          <li className="li-style-footer">
            <NavLink
              className="nav-link"
              to="/"
              exact
              activeClassName="active-link"
            >
              &copy;Blockchain Playground
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  )
}
