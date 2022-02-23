import React from 'react';

function Header() {
  return (
    <header class="bg-dark">
      <div class="clearfix display-flex container" data-items="center">
        <div class="logo">
          <a href="">
            <img
              src="https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/logo.png"
              alt="logo Placeholder"
            />
          </a>{' '}
        </div>
        <div class="align-items-center margin-left-auto">
          <nav>
            <ul class="nav">
              <li class=" nav-link">
                <a href="">Dashboard</a>
              </li>
              <li class="nav-link">
                <a href="">Events</a>
              </li>
              <li class=" nav-link">
                <a href="">Help</a>
              </li>
              <li class=" nav-link">
                <a href="">Logout</a>
              </li>
              <li class=" nav-link"></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
