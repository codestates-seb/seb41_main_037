import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { InputCard } from "../SignupPage/SignupPage";
import HomeHeader from "../../components/AdminHeader/AdminHeader";
import { useNavigate } from "react-router-dom";

const LoginMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f4f5f9;
  height: 100vh;
  .loginSection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 2px 2px 3px #7a7979;
    width: 400px;
    height: 350px;
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
      div {
        display: flex;
        align-items: center;
        font-size: 10px;
        color: red;
        div {
          margin: 0.1rem 0 0 0.2rem;
          align-items: center;
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
    .convertToSignup {
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

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [isEmailWarning, setIsEmailWarning] = useState(false);
  const [emailState, setEmailState] = useState(false);

  const [password, setPassword] = useState("");
  const [isPasswordWarning, setIsPasswordWarning] = useState(false);
  const [passwordState, setPasswordState] = useState(false);

  useEffect(() => {
    if (email === "") {
      setIsEmailWarning(false);
    } else if (
      email.match(
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
      )
    ) {
      setIsEmailWarning(false);
      setEmailState(true);
    } else {
      setIsEmailWarning(true);
      setEmailState(false);
    }

    if (password === "") {
      setIsPasswordWarning(false);
    } else if (password.match(/^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,}$/)) {
      setIsPasswordWarning(false);
      setPasswordState(true);
    } else {
      setIsPasswordWarning(true);
      setPasswordState(false);
    }
  }, [email, password]);

  const handleLogin = () => {
    // 서버 통신 후 다시 작성!
    if (emailState && passwordState) {
      // 로그인 성공 시
      navigate("/");
    } else {
      // 로그인 실패 시
      alert("로그인 실패");
    }
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <HomeHeader />
      <LoginMain>
        <section className="loginSection">
          <InputCard
            id="email"
            title="Email"
            value={email}
            handleChange={handleEmail}
            warning="유효하지 않은 이메일 형식입니다"
            warningState={isEmailWarning}
          />
          <InputCard
            id="password"
            title="Password"
            value={password}
            handleChange={handlePassword}
            warning="비밀번호는 특수문자, 영문, 숫자 포함 8자리 이상이어야 합니다"
            warningState={isPasswordWarning}
            type="password"
          />
          <button onClick={handleLogin}>Log in</button>
          <section className="convertToSignup">
            <span>계정이 없다면?</span>
            <a href="/signup">Sign up</a>
          </section>
        </section>
      </LoginMain>
    </>
  );
};

export default LoginPage;
