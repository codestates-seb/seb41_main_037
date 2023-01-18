import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img className="cvsLogo" src="/img/cvs logo.png" alt="logoImg"></img>
      </Link>
    </header>
  );
};

export default Header;
