// import React from "react";
import styled from "styled-components";
import { useState } from "react";

const HomePageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  height: 75px;
  width: 100vw;
  background-color: #b1b1b1;
  box-shadow: 1px 1px 2px #7a7979;
  .buttonSection {
    display: flex;
    align-items: center;
    margin-right: 2rem;
    button {
      border: none;
      width: 80px;
      height: 35px;
      color: #fff;
      background-color: #58419c;
      box-shadow: 1px 1px 2px #7a7979;
      border-radius: 30px;
      font-size: 17px;
      margin: 0 0.5rem;
      &:hover {
        filter: brightness(1.1);
        transform: scale(1.1);
        transition: 0.3s;
      }
    }
  }
`;

const HomeHeader = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <HomePageHeader>
      <img
        src="https://cdn.discordapp.com/attachments/1059647896942809148/1062250836220203069/Logo-removebg-preview.png"
        alt="logo"
      />
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
