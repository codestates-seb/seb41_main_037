import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 150px;
  margin-top: 50px;
  margin-bottom: 50px;
  .cvsLogo {
    width: 150px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <img className="cvsLogo" src="/img/cvs logo.png" alt="logoImg"></img>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
