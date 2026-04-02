import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">STUDIO</div>
      <nav className="nav">
        <a className="nav-link">Shop</a>
        <a className="nav-link">About</a>
        <a className="nav-link">Cart (0)</a>
      </nav>
    </header>
  );
};

export default Header;
