import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomePageHeader = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  height: 75px;
  width: 100vw;
  background-color: #b1b1b1;
  box-shadow: 1px 1px 2px #7a7979;
  img {
    &:hover {
      transform: scale(1.1);
      transition: 0.5s;
    }
  }
`;

const HomeHeader = () => {
  const navigate = useNavigate();
  const handleClickHeader = () => {
    navigate("/");
  };
  return (
    <HomePageHeader>
      <img src="/img/cvs logo.png" alt="logo" onClick={handleClickHeader} />
    </HomePageHeader>
  );
};

export default HomeHeader;
