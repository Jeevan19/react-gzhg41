import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  let location = useLocation();

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
                <Link to="/event" key="dashboard">
                  {' '}
                  Dashboard
                </Link>
              </li>
              <li className="nav-link">
                <Link
                  to="/event"
                  key="events"
                  className={location.pathname === '/event' ? 'active' : ''}
                >
                  {' '}
                  Events
                </Link>
              </li>
              <li className=" nav-link">
                <Link to="/event" key="help">
                  {' '}
                  Help
                </Link>
              </li>
              <li className=" nav-link">
                <Link to="/event" key="logout">
                  {' '}
                  Logout
                </Link>
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
