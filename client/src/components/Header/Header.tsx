import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// const DetailHeader = styled.header`
//   display: flex;
//   justify-content: center;
//   height: 200px;
//   width: 100%;
//   // position: fixed;
//   // top: 0;
//   // background-color: yellow;
// `;
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
