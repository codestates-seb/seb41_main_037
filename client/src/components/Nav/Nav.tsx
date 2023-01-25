import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";
import { LoginState } from "../../states/LoginState";

const NavBar = styled.main`
  position: fixed;
  text-align: center;
  width: 100px;
  height: 100%;
  background-color: #ffcb5e;
  .homeBtn {
    margin-top: 10px;
    margin-bottom: 70px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:hover {
      transition: 1s;
      transform: scale(1.05);
    }
    .home {
      width: 80px;
    }
  }
  .cvsLogo {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100px;
    height: 100px;
    cursor: pointer;
    > img {
      width: 60px;
    }
  }
  .focused {
    background-color: white;
  }
  .userBtn {
    @media screen and (max-height: 600px) {
      display: none;
    }
    @media screen and (min-height: 600px) {
      position: absolute;
      bottom: 0;
      flex-direction: column;
      margin-top: 120px;
      margin-bottom: 15px;
      > button {
        width: 50px;
        height: 50px;
        margin: 3px;
        background-color: #58419c;
        color: white;
        border: none;
        border-radius: 50px;
        font-family: "Do Hyeon", sans-serif;
        &:hover {
          background-color: white;
          color: #58419c;
        }
        &:focus {
          border: solid 2px #58419c;
        }
      }
    }
  }
`;

const Nav = () => {
  const [currentTab, clickTab] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = useRecoilValue(LoginState);
  const setIsLogin = useSetRecoilState(LoginState);

  const menuItem = [
    {
      path: "/cu",
      img1: <img src="/img/cu logo.png" alt="CU"></img>,
      img2: <img src="/img/cu logo_white.png" alt="CU"></img>,
    },
    {
      path: "/gs25",
      img1: <img src="/img/gs25 logo.png" alt="GS25"></img>,
      img2: <img src="/img/gs25 logo_white.png" alt="GS25"></img>,
    },
    {
      path: "/seveneleven",
      img1: <img src="/img/seveneleven logo.png" alt="7-ELEVEN"></img>,
      img2: <img src="/img/seveneleven logo_white.png" alt="7-ELEVEN"></img>,
    },
  ];

  const selectHandler = (index: number) => {
    clickTab(currentTab);
  };

  const handleClickLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("memberID");
    localStorage.removeItem("role");
    setIsLogin(false);
    navigate("/");
  };

  return (
    <NavBar>
      <section className="homeBtn">
        <img
          className="home"
          src="/img/cvs logo2.png"
          alt="HOME"
          onClick={() => navigate("/")}
        ></img>
      </section>
      <section className="menuBtn">
        {menuItem.map((item, index) => (
          <div
            onClick={() => {
              selectHandler(index);
              navigate(item.path);
            }}
            className={
              location.pathname === item.path ? "cvsLogo focused" : "cvsLogo"
            }
          >
            {location.pathname === item.path ? item.img1 : item.img2}
          </div>
        ))}
      </section>
      {isLogin ? (
        <section className="userBtn">
          <button className="mypageBtn">
            <Link to="/mypage">Mypage</Link>
          </button>
          <button className="logoutBtn" onClick={handleClickLogout}>
            <Link to="/">Logout</Link>
          </button>
        </section>
      ) : (
        <section className="userBtn">
          <button className="loginBtn">
            <Link to="/login">Login</Link>
          </button>
          <button className="signupBtn">
            <Link to="/signup">
              Sign <br />
              up
            </Link>
          </button>
        </section>
      )}
    </NavBar>
  );
};

export default Nav;
