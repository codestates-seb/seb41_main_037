// import React from "react";
import styled from "styled-components";

const SignupMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f4f5f9;
  height: 100vh;
  .signupSection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 2px 2px 3px #7a7979;
    width: 400px;
    height: 400px;
    background-color: #ffcb5e;
    padding: 1rem;
    .inputForm {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      label {
        color: #383838;
        font-size: 18px;
        font-weight: 600;
      }
      input {
        width: 300px;
        height: 35px;
        border: none;
        border-radius: 5px;
        margin: 0.5rem 0;
        padding: 0.5rem;
        font-size: 15px;
        box-shadow: inset 1px 1px 2px #7a7979;
        &:focus-within {
          outline: none !important;
        }
      }
    }
    button {
      width: 300px;
      height: 35px;
      border: none;
      border-radius: 5px;
      margin-top: 1rem;
      background-color: #58419c;
      font-size: 18px;
      color: #fff;
      box-shadow: 1px 1px 1px #7a7979;
      &:hover {
        filter: brightness(1.2);
        transition: 0.5s;
        cursor: pointer;
      }
    }
    .convertToLogin {
      display: flex;
      align-items: center;
      margin-top: 1rem;
      font-size: 14px;
      a {
        font-size: 12px;
        margin-left: 0.5rem;
        padding: 0.2rem;
        border-radius: 3px;
        background-color: #58419c;
        color: #fff;
        &:hover {
          filter: brightness(1.2);
          transition: 0.5s;
          cursor: pointer;
        }
      }
    }
  }
`;

interface InputProps {
  [key: string]: string;
}

export const InputCard = ({ id, title }: InputProps) => {
  return (
    <form action="submit" className="inputForm">
      <label htmlFor={id}>{title}</label>
      <input type="text" id={id} />
    </form>
  );
};

const SignupPage = () => {
  return (
    <SignupMain>
      <section className="signupSection">
        <InputCard id="email" title="Email" />
        <InputCard id="password" title="Password" />
        <InputCard id="passwordConfirm" title="Password Confirm" />
        <button>Sign up</button>
        <section className="convertToLogin">
          <span>계정이 있다면?</span>
          <a href="/login">Log in</a>
        </section>
      </section>
    </SignupMain>
  );
};

export default SignupPage;
