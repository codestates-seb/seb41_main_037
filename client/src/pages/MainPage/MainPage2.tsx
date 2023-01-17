import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RxMagnifyingGlass } from "react-icons/rx";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import Nav from "../../components/Nav/Nav";

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
            width: 160px;
            height: 160px;
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
          <img src={img}></img>
        </div>
        <div className="itemInfo">
          <div className="itemName">{name}</div>
          <div className="itemPrice">{price}</div>
        </div>
      </Link>
    </div>
  );
};

const MainPage2 = () => {
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
              img="http://gs25appimg.gsretail.com/imgsvr/item/GD_8801728107109_002.jpg"
              name="메이플스토리핑크빈딸기별"
              price="2,000원"
            />
            <Item
              id="2"
              img="http://gs25appimg.gsretail.com/imgsvr/item/GD_8801728107116_002.jpg"
              name="메이플스토리예티갈릭새우칩"
              price="2,000원"
            />
            <Item
              id="3"
              img="http://gs25appimg.gsretail.com/imgsvr/item/GD_8801728107123_002.jpg"
              name="메이플스토리돌의정령초코콘"
              price="2,000원"
            />
            <Item
              id="4"
              img="http://gs25appimg.gsretail.com/imgsvr/item/GD_8801728107130_002.jpg"
              name="메이플스토리주황버섯계란과자"
              price="2,000원"
            />
            <Item
              id="5"
              img="http://gs25appimg.gsretail.com/imgsvr/item/GD_8801062862924_001.jpg"
              name="핑크빈의레드초코팬케익"
              price="1,500원"
            />
            <Item
              id="6"
              img="http://gs25appimg.gsretail.com/imgsvr/item/GD_8801062862900_001.jpg"
              name="예티의바나나크림샌드"
              price="1,500원"
            />
            <Item
              id="7"
              img="http://gs25appimg.gsretail.com/imgsvr/item/GD_8801062862931_001.jpg"
              name="주황버섯의씨앗호떡"
              price="1,500원"
            />
            <Item
              id="8"
              img="http://gs25appimg.gsretail.com/imgsvr/item/GD_8801062862948_001.jpg"
              name="돌의정령의초코칩케이크"
              price="1,500원"
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
  );
};

export default MainPage2;
