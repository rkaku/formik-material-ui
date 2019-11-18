import React from 'react';
import './Navigation.css';
import { NavLink, useLocation } from 'react-router-dom'


export default function Navigation () {
  const location = useLocation()
  return (
    <div className="nav">
      <header className="nav-header">
        <ul className="ul-style">
          <li className="li-style">
            <NavLink
              className="nav-link"
              to="/"
              exact
              activeClassName="active-link"
            >
              &copy;Blockchain Playground
            </NavLink>
          </li>
          {
            // location.pathname === '/wallet' && (
            //   <li className="li-style">
            //     <NavLink
            //       className="nav-link"
            //       to="/wallet"
            //       exact
            //       activeClassName="active-link"
            //     >
            //       WALLET
            //     </NavLink>
            //   </li>
            // )
          }
          {
            // location.pathname === '/pool' && (
            //   <li className="li-style">
            //     <NavLink
            //       className="nav-link"
            //       to="/pool"
            //       exact
            //       activeClassName="active-link"
            //     >
            //       TRANSACTION POOL
            //     </NavLink>
            //   </li>
            // )
          }
          {
            // location.pathname === '/chain' && (
            //   <li className="li-style">
            //     <NavLink
            //       className="nav-link"
            //       to="/chain"
            //       exact
            //       activeClassName="active-link"
            //     >
            //       BLOCKCHAIN
            //     </NavLink>
            //   </li>
            // )
          }
          {/* <li className="li-style">
            <NavLink
              className="nav-link"
              to="/"
              exact
              activeClassName="active-link"
            >
              HOME
            </NavLink>
          </li> */}
        </ul>
      </header>
    </div>
  )
}
