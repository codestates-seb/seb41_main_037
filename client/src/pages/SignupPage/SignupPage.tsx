import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import HomeHeader from "../../components/AdminHeader/AdminHeader";
import { RiErrorWarningFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import LoginFooter from "../../components/LoginFooter/LoginFooter";

const Container = styled.section`
  font-family: "Do Hyeon", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

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
    height: 460px;
    background-color: #ffcb5e;
    padding: 1rem;
    .inputForm {
      display: flex;
      flex-direction: column;
      margin-bottom: 0.5rem;
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
      font-family: "Do Hyeon", sans-serif;
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
  id: string;
  title: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  warning: string;
  warningState: boolean;
  type?: string;
}

export const InputCard = ({
  id,
  title,
  value,
  handleChange,
  warning,
  warningState,
  type,
}: InputProps) => {
  return (
    <form action="submit" className="inputForm">
      <label htmlFor={id}>{title}</label>
      <input type={type} id={id} value={value} onChange={handleChange} />
      {warningState && (
        <div>
          <RiErrorWarningFill size={12} />
          <div>{warning}</div>
        </div>
      )}
    </form>
  );
};

const SignupPage = () => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const [isNicknameWarning, setIsNicknameWarning] = useState(false);
  const [nicknameState, setNicknameState] = useState(false);

  const [email, setEmail] = useState("");
  const [isEmailWarning, setIsEmailWarning] = useState(false);
  const [emailState, setEmailState] = useState(false);

  const [password, setPassword] = useState("");
  const [isPasswordWarning, setIsPasswordWarning] = useState(false);
  const [passwordState, setPasswordState] = useState(false);

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isPasswordConfirmWarning, setIsPasswordConfirmWarning] =
    useState(false);
  const [passwordConfirmState, setPasswordConfirmState] = useState(false);

  useEffect(() => {
    if (nickname === "") {
      setIsNicknameWarning(false);
      setNicknameState(false);
    } else {
      setIsNicknameWarning(false);
      setNicknameState(true);
    }

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

    if (passwordConfirm === "") {
      setIsPasswordConfirmWarning(false);
    } else if (passwordConfirm === password) {
      setIsPasswordConfirmWarning(false);
      setPasswordConfirmState(true);
    } else {
      setIsPasswordConfirmWarning(true);
      setPasswordConfirmState(false);
    }
  }, [nickname, email, password, passwordConfirm]);

  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handlePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value);
  };

  const handleSignupClick = () => {
    // 서버 통신 후 다시 작성!
    if (nicknameState && emailState && passwordState && passwordConfirmState) {
      // 회원가입 성공 시
      alert("회원가입이 완료되었습니다");
      navigate("/login");
    } else {
      // 회원가입 실패 시(option)
      alert("다시 한 번 확인해주세요");
    }
  };

  return (
    <Container>
      <HomeHeader />
      <SignupMain>
        <section className="signupSection">
          <InputCard
            id="nickname"
            title="Nickname"
            value={nickname}
            handleChange={handleNickname}
            warning="이미 사용중인 닉네임입니다"
            warningState={isNicknameWarning}
          />
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
          <InputCard
            id="passwordConfirm"
            title="Password Confirm"
            value={passwordConfirm}
            handleChange={handlePasswordConfirm}
            warning="정확한 비밀번호를 입력해 주세요"
            warningState={isPasswordConfirmWarning}
            type="password"
          />
          <button onClick={handleSignupClick}>Sign up</button>
          <section className="convertToLogin">
            <span>계정이 있다면?</span>
            <a href="/login">Log in</a>
          </section>
        </section>
      </SignupMain>
      <LoginFooter />
    </Container>
  );
};

export default SignupPage;
