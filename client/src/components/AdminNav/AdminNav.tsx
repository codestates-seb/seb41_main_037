import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { LoginState } from "../../states/LoginState";
import { useSetRecoilState } from "recoil";

const AdminNavBar = styled.nav`
  font-family: "Do Hyeon", sans-serif;
  margin-top: 75px;
  min-width: 192px;
  height: 100vh;
  color: #fff;
  box-shadow: inset 1px 1px 5px #7a7979;
  .buttonSection {
    min-width: 192px;
    position: fixed;
    .menuSection {
      display: flex;
      flex-direction: column;
      h2 {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background-color: #383838;
        padding-left: 1rem;
        color: #fff;
        width: 100%;
        height: 50px;
      }
      a {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 1rem;
        color: #979595;
        width: 100%;
        height: 50px;
        &:hover {
          color: #383838;
        }
      }
      .tab {
        background-color: #979595;
        color: #fff;
        box-shadow: inset 2px 2px 2px #7a7979;
      }
    }
    .memberSection {
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      min-width: 192px;
      bottom: 0;
      button {
        font-family: "Do Hyeon", sans-serif;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border: none;
        padding-left: 1rem;
        background-color: #979595;
        color: #fff;
        box-shadow: inset 2px 2px 2px #7a7979;
        width: 100%;
        height: 50px;
        &:hover {
          color: #383838;
        }
      }
    }
  }
`;

const AdminNav = () => {
  const navigate = useNavigate();
  const setIsLogin = useSetRecoilState(LoginState);
  let location = window.location.pathname;

  const handleClickLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("memberID");
    localStorage.removeItem("role");
    setIsLogin(false);
    navigate("/");
  };

  return (
    <AdminNavBar>
      <section className="buttonSection">
        <section className="menuSection">
          <h2>관리자 메뉴</h2>
          <a
            href="/admin/search"
            className={
              location === "/admin/search" || location === "/admin/update"
                ? "tab"
                : ""
            }
          >
            상품검색
          </a>
          <a
            href="/admin/create"
            className={location === "/admin/create" ? "tab" : ""}
          >
            상품등록
          </a>
          <a
            href="/admin/comment/delete?page=1"
            className={location === "/admin/comment/delete" ? "tab" : ""}
          >
            리뷰삭제
          </a>
        </section>
        <section className="memberSection">
          <button onClick={handleClickLogout}>Logout</button>
        </section>
      </section>
    </AdminNavBar>
  );
};

export default AdminNav;
