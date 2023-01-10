// import React from "react";
import styled from "styled-components";

const AdminNavBar = styled.nav`
  margin-top: 75px;
  min-width: 180px;
  height: 100vh;
  color: #fff;
  box-shadow: inset 1px 1px 5px #7a7979;
  .buttonSection {
    display: flex;
    flex-direction: column;
    div {
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
`;

const AdminNav = () => {
  let location = window.location.pathname;
  return (
    <AdminNavBar>
      <section className="buttonSection">
        <div>관리자 메뉴</div>
        <a
          href="/admin/search"
          className={location === "/admin/search" ? "tab" : ""}
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
          href="/admin/comment/delete"
          className={location === "/admin/comment/delete" ? "tab" : ""}
        >
          리뷰삭제
        </a>
      </section>
    </AdminNavBar>
  );
};

export default AdminNav;
