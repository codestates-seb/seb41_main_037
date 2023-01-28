import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { LoginState } from "../../states/LoginState";

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
  button {
    font-family: "Do Hyeon", sans-serif;
    position: fixed;
    right: 50px;
    border: none;
    border-radius: 10px;
    background-color: #7a7979;
    padding: 0.5rem 1rem;
    color: #fff;
    top: 21.25px;
    &:hover {
      cursor: pointer;
      box-shadow: 1px 1px 2px #464646;
    }
  }
`;

const HomeHeader = () => {
  const navigate = useNavigate();
  const isLogin = useRecoilValue(LoginState);

  const handleClickHeader = () => {
    navigate("/");
  };
  const handleAdminClick = () => {
    if (!isLogin) {
      navigate("/login");
    } else if (isLogin && localStorage.getItem("role") === "ADMIN") {
      navigate("/admin/search");
    } else {
      alert("접근 권한이 없습니다");
    }
  };
  return (
    <HomePageHeader>
      <img src="/img/cvs logo.png" alt="logo" onClick={handleClickHeader} />
      <button onClick={handleAdminClick}>관리자</button>
    </HomePageHeader>
  );
};

export default HomeHeader;
