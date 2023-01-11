import React from "react";
import styled from "styled-components";

const NavBar = styled.main`
  background-color: #ffcb5e;
  width: 100px;
  height: 100%;
  padding-top: 10px;
  text-align: center;

  .homeBtn > button {
    background-color: transparent;
    border: none;
    margin-bottom: 70px;
    &:hover {
      transition: 1s;
      transform: scale(1.05);
    }
  }

  .logoBtn {
    width: 80px;
  }

  .cvsBtn > button {
    text-align: center;
    background-color: transparent;
    border: none;
    width: 100px;
    height: 100px;
  }

  .cuBtn {
    width: 100px;
    background-image: url("img/cu logo_white.png");
    background-repeat: no-repeat;
    background-size: 60px;
    background-position: center;
    &:focus {
      width: 100px;
      background-color: white;
      background-image: url("img/cu logo.png");
      background-repeat: no-repeat;
      background-size: 60px;
      background-position: center;
    }
  }

  .gs25Btn {
    width: 100px;
    background-image: url("img/gs25 logo_white.png");
    background-repeat: no-repeat;
    background-size: 60px;
    background-position: center;
    &:focus {
      width: 100px;
      background-color: white;
      background-image: url("img/gs25 logo.png");
      background-repeat: no-repeat;
      background-size: 60px;
      background-position: center;
    }
  }

  .sevenelevenBtn {
    width: 100px;
    background-image: url("img/seveneleven logo_white.png");
    background-repeat: no-repeat;
    background-size: 60px;
    background-position: center;
    &:focus {
      width: 100px;
      background-color: white;
      background-image: url("img/seveneleven logo.png");
      background-repeat: no-repeat;
      background-size: 60px;
      background-position: center;
    }
  }

  .userBtn {
    text-align: center;
    margin-top: 120px;
    .loginBtn {
      background-color: #58419c;
      border: none;
      border-radius: 50px;
      color: white;
      width: 50px;
      height: 50px;
      margin: 3px;
      &:hover {
        background-color: white;
        color: #58419c;
      }
      &:focus {
        border: solid 2px #58419c;
      }
    }

    .signupBtn {
      background-color: #58419c;
      border: none;
      border-radius: 50px;
      color: white;
      width: 50px;
      height: 50px;
      margin: 3px;
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
  return (
    <nav>
      <NavBar>
        <section className="homeBtn">
          <button>
            <img className="logoBtn" src="img/cvs logo2.png"></img>
          </button>
        </section>
        <section className="cvsBtn">
          <button className="cuBtn"></button>
          <button className="gs25Btn"></button>
          <button className="sevenelevenBtn"></button>
        </section>
        <section className="userBtn">
          <button className="loginBtn">Login</button>
          <button className="signupBtn">
            Sign <br />
            up
          </button>
        </section>
      </NavBar>
    </nav>
  );
};

export default Nav;
