// import React from "react";
import AdminNav from "../../../components/AdminNav/AdminNav";
import styled from "styled-components";
import HomeHeader from "../../../components/AdminHeader/AdminHeader";
import { RxMagnifyingGlass } from "react-icons/rx";
import { BsTrashFill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const ItemSearchPageMain = styled.main`
  margin: 100px 0 0 100px;
  .itemSearch {
    width: 700px;
    .adminTitle {
      display: flex;
      justify-content: flex-start;
      font-size: 24px;
      margin-bottom: 1rem;
    }
  }
  .searchBarSection {
    position: relative;
    width: 700px;
    height: 40px;
    margin-bottom: 1rem;
    input {
      width: 700px;
      height: 40px;
      font-size: 15px;
      color: #383838;
      padding: 0.5rem 0 0.5rem 2rem;
      border: none;
      border-radius: 30px;
      background-color: #f5f5f5;
      box-shadow: 3px 3px 3px #979595;
      &::placeholder {
        color: #979595;
      }
      &:focus-within {
        outline: none !important;
        box-shadow: 3px 3px 3px #7a7979;
      }
    }
    .search.icon {
      position: absolute;
      top: 7px;
      right: 10px;
      color: #58419c;
    }
  }

  .itemListSection {
    width: 700px;
    max-height: 500px;
    border-radius: 5px;
    background-color: #d9d9d9;
    padding: 0.5rem;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: #f5f5f5;
    }
    .item {
      display: flex;
      border-radius: 3px;
      align-items: center;
      margin: 1rem;
      padding: 0.5rem;
      justify-content: space-between;
      background-color: #f5f5f5;
      box-shadow: inset 1px 1px 2px #7a7979;
      p {
        font-size: 15px;
        line-height: 20px;
        width: 95%;
      }
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 5%;
        width: 20px;
        height: 20px;
        margin: 3px;
        background-color: #7a7979;
        color: #fff;
        border-radius: 30px;
        &:hover {
          transform: rotate(20deg);
          transition: 0.2s;
          background-color: #383838;
        }
      }
    }
  }
`;

const dummyItems = [
  "미네랄워터",
  "청양고추짬뽕컵",
  "속초홍게라면",
  "콘소메맛팝콘",
  "버터스틱쿠키",
  "마늘콘스택",
  "까르보불닭면",
  "아메리카노원컵",
  "오렌지주스",
  "계란샐러드",
];

const ItemSearchPage = () => {
  return (
    <>
      <Main>
        <HomeHeader />
        <AdminNav />
        <ItemSearchPageMain>
          <section className="itemSearch">
            <section className="adminTitle">
              <h2>상품검색</h2>
            </section>
            <section className="searchBarSection">
              <input type="text" placeholder="상품명을 입력하세요." />
              <RxMagnifyingGlass className="search icon" size={25} />
            </section>
          </section>
          <section className="itemListSection">
            {dummyItems.map((item, idx) => (
              <section className="item" key={idx}>
                <p>{item}</p>
                <Link to="/admin/update">
                  <div className="icon">
                    <BiEdit size={12} />
                  </div>
                </Link>
                <div className="icon">
                  <BsTrashFill size={12} />
                </div>
              </section>
            ))}
          </section>
        </ItemSearchPageMain>
      </Main>
    </>
  );
};

export default ItemSearchPage;
