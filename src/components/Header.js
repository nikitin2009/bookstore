import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand">
      <div className="container">

        <a className="navbar-brand" href="/">Bookstore</a>

        <div className="navbar-nav mr-auto">
          <a className="nav-item nav-link active" href="/">Books</a>
          <a className="nav-item nav-link" href="/categories">Categories</a>
        </div>

      </div>
    </nav>
  );
};

export default Header;