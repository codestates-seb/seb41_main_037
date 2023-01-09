import React from "react";
import styled from "styled-components";

const NavBar = styled.main`
  background-color: #ffcb5e;
  color: white;
  width: 100px;
  height: 100%;
  padding-top: 150px;

  button {
    text-align: center;
    background-color: transparent;
    border: none;
    width: 100px;
    height: 100px;
    &:hover {
      filter: opacity(0.5) drop-shadow(0 0 0 #58419c);
    }
    &:focus {
      background-color: #58419c;
    }
  }

  .cuBtn {
    width: 75px;
  }

  .gs25Btn {
    width: 75px;
  }

  .sevenelevenBtn {
    width: 70px;
  }
`;

const Nav = () => {
  return (
    <nav>
      <NavBar>
        <button>
          <img className="cuBtn" src="img/cu logo_white.png" alt="logo" />
        </button>
        <button>
          <img className="gs25Btn" src="img/gs25 logo_white.png" alt="logo" />
        </button>
        <button>
          <img
            className="sevenelevenBtn
        "
            src="img/seveneleven logo_white.png"
            alt="logo"
          />
        </button>
      </NavBar>
    </nav>
  );
};

export default Nav;
