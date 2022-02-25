import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  let location = useLocation();
  console.log(location);
  return (
    <header className="bg-dark">
      <div className="clearfix display-flex container" data-items="center">
        <div className="logo">
          <a href="">
            <img
              src="https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/logo.png"
              alt="logo Placeholder"
            />
          </a>
        </div>
        <div className="align-items-center margin-left-auto">
          <nav>
            <ul className="nav">
              <li className=" nav-link">
                <Link to="/event"> Dashboard</Link>
              </li>
              <li className="nav-link">
                <Link
                  to="/event"
                  className={location.pathname === '/event' ? 'active' : ''}
                >
                  {' '}
                  Events
                </Link>
              </li>
              <li className=" nav-link">
                <Link to="/event"> Help</Link>
              </li>
              <li className=" nav-link">
                <Link to="/event"> Logout</Link>
              </li>
              <li className=" ">
                <a className="menu-nav-link" href=""></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
