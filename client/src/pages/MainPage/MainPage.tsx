import React from "react";
import styled from "styled-components";
import { RxMagnifyingGlass } from "react-icons/rx";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import Nav from "../../components/Nav/Nav";
import { Link } from "react-router-dom";

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
        &:hover {
          outline: solid 5px;
          outline-color: #ffcb5e;
          border-radius: 20px;
        }

        .itemImg {
          width: 200px;
          height: 200px;
        }

        .itemName {
          margin-bottom: 5px;
          font-size: 17px;
          font-weight: 600;
        }

        .itemPrice {
          font-size: 20px;
          font-weight: 800;
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
`;

interface ItemProps {
  [key: string]: string;
}

const Item = ({ img, name, price, like }: ItemProps) => {
  return (
    <div className="itemBox">
      <HiOutlineHeart className="itemLike">{like}</HiOutlineHeart>
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
      <section className="mainContainer">
        <section className="headerContainer">
          <header>
            <Link to="/">
              <img className="cvsLogo" src="img/cvs logo.png"></img>
            </Link>
          </header>
          <div className="searchBar">
            <input />
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
            <Item
              img="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8809253648487.jpg"
              name="복숭아에이드"
              price="1,200원"
            />
            <Item
              img="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8805489001935.jpg"
              name="망고에이드"
              price="1,500원"
            />
            <Item
              img="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8809253648531.jpg"
              name="청포도에이드"
              price="1,800원"
            />
            <Item
              img="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8802774000161.jpg"
              name="블루레몬에이드"
              price="1,200원"
            />
          </div>
        </section>
      </section>
    </Container>
  );
};

export default MainPage;
