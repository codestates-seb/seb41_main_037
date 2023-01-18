import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RxMagnifyingGlass } from "react-icons/rx";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

const Container = styled.main`
  display: flex;
  width: 100%;
  margin-bottom: 100px;

  .mainContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    margin-left: 100px;
  }

  header {
    height: 150px;
    margin-top: 50px;
    margin-bottom: 50px;

    .cvsLogo {
      width: 150px;
    }
  }

  .searchBar {
    position: relative;
    margin-bottom: 50px;

    input {
      width: 500px;
      height: 50px;
      padding: 0.5rem 0 0.5rem 3rem;
      background-color: #f5f5f5;
      border: none;
      border-radius: 30px;
      font-size: 15px;

      &:focus {
        outline-color: #58419c;
      }
    }
    .searchIcon {
      position: absolute;
      width: 30px;
      height: 50px;
      right: 15px;
      color: #58419c;
      font-size: 30px;
    }
  }

  .contentContainer {
    display: flex;
    justify-content: right;
    flex-wrap: wrap;

    .sortBtnGroup {
      margin-right: 150px;
      margin-bottom: 50px;

      .sortBtn {
        vertical-align: middle;
        width: 50px;
        height: 50px;
        margin: 10px;
        padding: 5px;
        background-color: white;
        color: #58419c;
        border: solid 2px;
        border-color: #58419c;
        border-radius: 50px;
        font-size: 12px;
        font-weight: 600;
        font-family: "Do Hyeon", sans-serif;
        &:hover {
          background-color: #58419c;
          color: white;
        }
        &:focus {
          background-color: #58419c;
          color: white;
        }
      }
    }

    .itemList {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 50px;

      .itemBox {
        position: relative;
        flex-direction: column;
        width: 250px;
        height: 290px;
        margin: 20px;
        padding: 20px;
        outline: solid 3px;
        outline-color: #f5f5f5;
        border-radius: 20px;
        -ms-user-select: none;
        -moz-user-select: -moz-none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        font-family: "Do Hyeon", sans-serif;
        &:hover {
          outline: solid 5px;
          outline-color: #ffcb5e;
          border-radius: 20px;
        }

        .itemImg {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 200px;
          height: 200px;
          margin: 0 auto;
          margin-bottom: 10px;
          > img {
            width: 200px;
            height: 200px;
          }
        }

        .itemInfo {
          flex-direction: column;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;

          .itemName {
            margin-bottom: 10px;
            font-size: 17px;
            font-weight: 600;
          }

          .itemPrice {
            margin-bottom: 20px;
            font-size: 20px;
            font-weight: 800;
          }
        }

        .itemLike {
          position: absolute;
          right: 15px;
          color: #58419c;
          font-size: 25px;
        }
      }
    }
  }
  .pageBtnGroup {
    display: flex;
    .pageBtn {
      display: flex;
      background-color: white;
      color: #58419c;
      border: none;
      font-size: 17px;
    }
  }
`;

interface ItemProps {
  [key: string]: string;
}

const Item = ({ img, name, price }: ItemProps) => {
  const [like, setLike] = useState(false);

  return (
    <div className="itemBox">
      <span
        className="itemLike"
        onClick={() => {
          setLike(!like);
        }}>
        {like ? <HiHeart /> : <HiOutlineHeart />}
      </span>
      <Link to="/itemlist/:itemid">
        <div className="itemImg">
          <img src={img} alt="itemImg"></img>
        </div>
        <div className="itemInfo">
          <div className="itemName">{name}</div>
          <div className="itemPrice">{price}</div>
        </div>
      </Link>
    </div>
  );
};

const MainPage1 = () => {
  return (
    <>
      <Container>
        <Nav />
        <section className="mainContainer">
          <section className="headerContainer">
            <header>
              <Link to="/">
                <img
                  className="cvsLogo"
                  src="/img/cvs logo.png"
                  alt="logoImg"></img>
              </Link>
            </header>
            <div className="searchBar">
              <input
                type="text"
                maxLength={30}
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
              <RxMagnifyingGlass className="searchIcon" />
            </div>
          </section>
          <section className="contentContainer">
            <div className="sortBtnGroup">
              <button className="sortBtn">Score</button>
              <button className="sortBtn">Price</button>
              <button className="sortBtn">Like</button>
            </div>
            <div className="itemList">
              <Item
                id="1"
                img="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8801728106584.jpg"
                name="버터쿠키"
                price="1,000원"
              />
              <Item
                id="2"
                img="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8809027559445.jpg"
                name="콘소메맛팝콘"
                price="1,700원"
              />
              <Item
                id="3"
                img="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8801728106492.jpg"
                name="초코칩쿠키"
                price="2,000원"
              />
              <Item
                id="4"
                img="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8809189924495.jpg"
                name="고소한뉴짱"
                price="1,500원"
              />
              <Item
                id="5"
                img="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8809253648487.jpg"
                name="복숭아에이드"
                price="1,200원"
              />
              <Item
                id="6"
                img="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8805489001935.jpg"
                name="망고에이드"
                price="1,500원"
              />
              <Item
                id="7"
                img="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8809253648531.jpg"
                name="청포도에이드"
                price="1,800원"
              />
              <Item
                id="8"
                img="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8802774000161.jpg"
                name="블루레몬에이드"
                price="1,200원"
              />
            </div>
          </section>
          <div className="pageBtnGroup">
            <button className="pageBtn">
              <IoMdArrowDropleft />
            </button>
            <button className="pageBtn">1</button>
            <button className="pageBtn">2</button>
            <button className="pageBtn">3</button>
            <button className="pageBtn">4</button>
            <button className="pageBtn">5</button>
            <button className="pageBtn">
              <IoMdArrowDropright />
            </button>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default MainPage1;
