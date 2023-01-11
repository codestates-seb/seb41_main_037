import React from "react";
import styled from "styled-components";
import { RxMagnifyingGlass } from "react-icons/rx";
import Nav from "../../components/Nav/Nav";
import { Link } from "react-router-dom";

const Container = styled.main`
  display: flex;

  .container {
    margin: 50px;
    width: 1200px;
    max-width: 1200px;
    text-align: center;
  }

  header {
    height: 150px;
    .cvsLogo {
      width: 150px;
    }
  }

  .searchBar {
    position: relative;
    width: 600px;
    text-align: center;

    input {
      position: absolute;
      width: 100%;
      height: 50px;
      background-color: #f5f5f5;
      border: none;
      border-radius: 30px;
      font-size: 15px;
      padding: 0.5rem 0 0.5rem 3rem;

      &:focus {
        outline-color: #58419c;
      }
    }
    .searchIcon {
      position: relative;
      color: #58419c;
      font-size: 30px;
      width: 30px;
      height: 50px;
      margin-left: 10px;
    }
  }

  .sortBtnContainer {
    text-align: right;
  }

  .sortBtn {
    color: #58419c;
    background-color: white;
    border: solid 2px;
    border-color: #58419c;
    border-radius: 15px;
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 10px;
    margin-bottom: 50px;
    font-size: 15px;
    font-weight: 600;
    &:hover {
      background-color: #58419c;
      color: white;
    }
    &:focus {
      background-color: #58419c;
      color: white;
    }
  }

  .itemList {
    display: flex;
    .itemBox {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      width: 300px;
      height: 400px;
      &:hover {
        transition: 1s;
        transform: scale(1.05);
      }
    }
    .itemName {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 5px;
    }

    .itemPrice {
      font-size: 25px;
      font-weight: 800;
      margin-bottom: 5px;
    }
  }
`;

interface ItemProps {
  [key: string]: string;
}

const Item = ({ img, name, price }: ItemProps) => {
  return (
    <div className="itemBox">
      <img className="itemImg" src={img}></img>
      <div className="itemName">{name}</div>
      <div className="itemPrice">{price}</div>
    </div>
  );
};

const MainPage = () => {
  return (
    <Container>
      <Nav />
      <div className="container">
        <div>
          <header>
            <img className="cvsLogo" src="img/cvs logo.png"></img>
          </header>
          <div className="searchBar">
            <input />
            <RxMagnifyingGlass className="searchIcon" />
          </div>
          <div className="sortBtnContainer">
            <button className="sortBtn">추천순</button>
            <button className="sortBtn">가격순</button>
            <button className="sortBtn">댓글순</button>
          </div>
        </div>
        <div className="itemList">
          <Link to="/itemlist/:itemid">
            <Item
              img="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8801728106584.jpg"
              name="버터쿠키"
              price="1,000원"
            />
          </Link>
          <Item
            img="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8809027559445.jpg"
            name="콘소메맛팝콘"
            price="1,700원"
          />
          <Item
            img="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8801728106492.jpg"
            name="초코칩쿠키"
            price="2,000원"
          />
          <Item
            img="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8809189924495.jpg"
            name="고소한뉴짱"
            price="1,500원"
          />
        </div>
      </div>
    </Container>
  );
};

export default MainPage;
