import React, { useState } from "react";
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
  font-family: "Do Hyeon", sans-serif;
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
      font-family: "Do Hyeon", sans-serif;
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

  .menuTab {
    display: flex;
    align-items: center;
    list-style: none;
    background-color: #f5f5f5;
    color: #979595;

    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    cursor: pointer;

    > li {
      display: flex;
      width: 200px;
      height: 50px;
      justify-content: center;
      align-items: center;
      text-align: center;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
  }

  .active {
    background-color: #d9d9d9;
    color: black;
  }

  .itemListSection {
    width: 700px;
    max-height: 500px;
    background-color: #d9d9d9;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
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
      background-color: white;
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
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: "전체", content: "전체 data" },
    { name: "CU", content: "CU data" },
    { name: "GS25", content: "GS25 data" },
    { name: "SEVENELEVEN", content: "SEVENELEVEN data" },
  ];

  const selectHandler = (index: number) => {
    clickTab(index);
  };
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
            <section>
              <ul className="menuTab">
                {menuArr.map((el, index) => (
                  <li
                    className={
                      index === currentTab ? "menuTab active" : "menuTab"
                    }
                    onClick={() => selectHandler(index)}>
                    {el.name}
                  </li>
                ))}
              </ul>
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
