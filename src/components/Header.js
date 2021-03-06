import React from 'react';

const Header = () => (
  <nav className="navbar navbar-expand-sm bg-white border-bottom">
    <div className="container">

      <h1 className="text-primary mr-4" href="/">Bookstore</h1>

      <div className="navbar-nav mr-sm-auto">
        <a className="nav-item nav-link text-body" href="/">Books</a>
      </div>

    </div>
  </nav>
);

export default Header;
