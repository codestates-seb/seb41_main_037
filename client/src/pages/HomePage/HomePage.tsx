// import React from "react";
import styled from "styled-components";
import { RxMagnifyingGlass } from "react-icons/rx";
import HomeHeader from "../../components/HomeHeader/HomeHeader";

const HomeMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .searchBarSection {
    position: relative;
    width: 700px;
    height: 50px;
    margin-bottom: 5rem;
    margin-right: 2rem;
    input {
      width: 700px;
      height: 50px;
      font-size: large;
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
      top: 5px;
      right: 12px;
      color: #58419c;
    }
  }

  .bestItemSection {
    display: flex;
    flex-direction: column;
    .bestItemTitle {
      color: #58419c;
      margin-left: 1rem;
      font-size: 25px;
      font-weight: 700;
    }
    .bestItem {
      display: flex;
      .bestItemCard {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #ffcb5e;
        border-radius: 10px;
        box-shadow: 2px 2px 5px #979595;
        width: 244px;
        height: 300px;
        margin: 1rem;
        &:hover {
          transition: 1s;
          transform: scale(1.05);
        }
        .itmeRanking {
          display: flex;
          align-items: center;
          width: 100%;
          height: 45px;
          padding: 1rem;
          border-radius: 10px 10px 0 0;
          background-color: #ffcb5e;
          h2 {
            color: #fff;
            font-size: 20px;
            font-weight: 700;
          }
        }

        img {
          width: 200px;
          height: 200px;
        }
        .itemName {
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        .itemPrice {
          font-weight: 500;
          margin-bottom: 1rem;
        }
      }
    }
  }
`;

interface BestItemProps {
  [key: string]: string;
}

const BestItemCard = ({ top, name, price, image }: BestItemProps) => {
  return (
    <div className="bestItemCard">
      <div className="itmeRanking">
        <h2>{top}</h2>
      </div>

      <img src={image} alt={top} />
      <span className="itemName">{name}</span>
      <span className="itemPrice">{price}</span>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <HomeMain>
        <section className="searchBarSection">
          <input type="text" placeholder="검색어를 입력하세요." />
          <RxMagnifyingGlass className="search icon" size="40" />
        </section>
        <section className="bestItemSection">
          <h1 className="bestItemTitle">Weekly Best Item</h1>
          <section className="bestItem">
            <BestItemCard
              top="Top1"
              name="HEYROO매운까르보볶이"
              price="1,500원"
              image="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8801045574486.jpg"
            />
            <BestItemCard
              top="Top2"
              name="HEYROO뉴콘치즈그라탕"
              price="5,300원"
              image="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8805684006131.jpg"
            />
            <BestItemCard
              top="Top3"
              name="HEYROO바지락칼국수컵"
              price="2,300원"
              image="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8801085069157.jpg"
            />
          </section>
        </section>
      </HomeMain>
    </>
  );
};

export default HomePage;
