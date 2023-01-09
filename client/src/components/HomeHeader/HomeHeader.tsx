// import React from "react";
import styled from "styled-components";
import { BsSquareFill, BsCircleFill, BsTriangleFill } from "react-icons/bs";
import { useState } from "react";

const HomePageHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  height: 75px;
  width: 100vw;
  background-color: #ffcb5e;
  padding: 0 2rem;
  .logoSection {
    display: flex;
    color: #fff;
    & > * {
      margin: 0.5rem;
    }
  }
  .buttonSection {
    display: flex;
    button {
      border: none;
      width: 80px;
      height: 40px;
      color: #fff;
      background-color: #58419c;
      box-shadow: 1px 1px 2px #7a7979;
      border-radius: 30px;
      font-size: 17px;
      margin: 0 0.5rem;
      &:hover {
        filter: brightness(1.2);
        transition: 0.3s;
      }
    }
  }
`;

const HomeHeader = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <HomePageHeader>
      <section className="logoSection">
        <BsSquareFill size={30} />
        <BsCircleFill size={30} />
        <BsTriangleFill size={30} />
      </section>
      {isLogin ? (
        <section className="buttonSection">
          <button onClick={() => setIsLogin(!isLogin)}>Logout</button>
        </section>
      ) : (
        <section className="buttonSection">
          <button onClick={() => setIsLogin(!isLogin)}>Login</button>
          <button>Sign up</button>
        </section>
      )}
    </HomePageHeader>
  );
};

export default HomeHeader;
