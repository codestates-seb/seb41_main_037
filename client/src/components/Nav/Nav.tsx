import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

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

    > img {
      width: 60px;
    }
  }

  .focused {
    background-color: white;
  }

  .userBtn {
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

      &:hover {
        background-color: white;
        color: #58419c;
      }
      &:focus {
        border: solid 2px #58419c;
      }
    }
  }
`;

const Nav = () => {
  const [currentTab, clickTab] = useState(0);
  const navigate = useNavigate();

  const menuItem = [
    {
      path: "/cu",
      img1: <img src="img/cu logo.png"></img>,
      img2: <img src="img/cu logo_white.png"></img>,
    },
    {
      path: "/gs25",
      img1: <img src="img/gs25 logo.png"></img>,
      img2: <img src="img/gs25 logo_white.png"></img>,
    },
    {
      path: "/seveneleven",
      img1: <img src="img/seveneleven logo.png"></img>,
      img2: <img src="img/seveneleven logo_white.png"></img>,
    },
  ];

  const selectHandler = (index: number) => {
    clickTab(index);
  };

  return (
    <NavBar>
      <section className="homeBtn">
        <img
          className="home"
          src="img/cvs logo2.png"
          onClick={() => navigate("/")}></img>
      </section>
      <section className="menuBtn">
        {menuItem.map((item, index) => (
          <Link to={item.path} key={index}>
            <div
              onClick={() => selectHandler(index)}
              className={index === currentTab ? "cvsLogo focused" : "cvsLogo"}>
              {index === currentTab ? item.img1 : item.img2}
            </div>
          </Link>
        ))}
      </section>
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
    </NavBar>
  );
};

export default Nav;
