import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom'


export default function Navigation () {
  return (
    <div className="nav">
      <header className="nav-header">
        <ul className="ul-style">
          {/* <li className="li-style">
            <NavLink
              className="nav-link"
              to="/"
              exact
              activeClassName="active-link"
            >
              TOP
            </NavLink>
          </li> */}
          <li className="li-style">
            <NavLink
              className="nav-link"
              to="/wallet"
              exact
              activeClassName="active-link"
            >
              WALLETS
                </NavLink>
          </li>
          <li className="li-style">
            <NavLink
              className="nav-link"
              to="/pool"
              exact
              activeClassName="active-link"
            >
              {/* TRAN POOL */ }
              TRANSACTION POOL
                </NavLink>
          </li>
          <li className="li-style">
            <NavLink
              className="nav-link"
              to="/chain"
              exact
              activeClassName="active-link"
            >
              BLOCKCHAIN
                </NavLink>
          </li>
          <li className="li-style">
            <NavLink
              className="nav-link"
              to="/"
              exact
              activeClassName="active-link"
            >
              TOP PAGE
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  )
}
