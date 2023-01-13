import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.main`
  position: fixed;
  text-align: center;
  width: 100px;
  height: 100%;
  background-color: #ffcb5e;

  .homeBtn > button {
    margin-top: 10px;
    margin-bottom: 70px;
    background-color: transparent;
    border: none;

    &:hover {
      transition: 1s;
      transform: scale(1.05);
    }
    .logoBtn {
      width: 80px;
    }
  }

  .cvsBtn > button {
    text-align: center;
    width: 100px;
    height: 100px;
    background-color: transparent;
    background-position: center;
    background-size: 60px;
    background-repeat: no-repeat;
    color: transparent;
    border: none;

    &:focus {
      width: 100px;
      background-position: center;
      background-size: 60px;
      background-color: white;
      background-repeat: no-repeat;
    }
  }

  .cuBtn {
    background-image: url("img/cu logo_white.png");

    img {
      width: 60px;
      &:focus {
      }
    }
  }

  .gs25Btn {
    background-image: url("img/gs25 logo_white.png");

    &:focus {
      background-image: url("img/gs25 logo.png");
    }
  }

  .sevenelevenBtn {
    background-image: url("img/seveneleven logo_white.png");

    &:focus {
      background-image: url("img/seveneleven logo.png");
    }
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
  return (
    <NavBar>
      <section className="homeBtn">
        <button>
          <Link to="/">
            <img className="logoBtn" src="img/cvs logo2.png"></img>
          </Link>
        </button>
      </section>
      <section className="cvsBtn">
        <button className="cuBtn">
          <Link to="/itemlist">
            <img src="img/cu logo.png"></img>
          </Link>
        </button>
        <button className="gs25Btn">
          <Link to="/itemlist"></Link>
        </button>
        <button className="sevenelevenBtn">
          <Link to="/itemlist"></Link>
        </button>
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
