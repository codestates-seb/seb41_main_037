import React from "react";
import styled from "styled-components";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Main = styled.main`
  display: flex;
  width: 100%;
  margin-bottom: 100px;

  .Container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    margin-left: 100px;
    width: 100%;
  }

  header {
    height: 150px;
    margin-top: 50px;
    margin-bottom: 50px;

    .cvsLogo {
      width: 150px;
    }
  }

  .HomeMain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    align-items: center;
    margin-top: 5rem;
    height: 100vh;
    //background-color: lightgreen;
    .itemSection {
      //position: relative;
      width: 980px;
      height: 450px;
      // background-color: yellow;
      margin-bottom: 2rem;
      border: 3px solid #ffcb5e;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      img {
        width: 300px;
        height: 300px;
        margin: auto;
        //display: block;
        float: left;
      }
      .contentSection {
        background-color: #f5f5f5;
        width: 580px;
        height: 400px;
        float: left;
        margin: 20px;
        border-radius: 20px;
      }
      .TitleSection {
        font-size: 35px;
        font-weight: bold;
        margin: 70px 50px 20px 50px;
        border-bottom: 7px solid #ffcb5e;
        // background-color: red;
        height: 70px;
      }
      .PriceSection {
        font-size: 15px;
        font-weight: bold;
        margin: 20px 50px 20px 50px;
        border-bottom: 2px solid #ffcb5e;
        // background-color: red;
        height: 40px;
      }
      .ExplaneSection {
        font-size: 15px;
        font-weight: bold;
        margin: 20px 50px 20px 50px;
        border-bottom: 2px solid #ffcb5e;
        // background-color: red;
        height: 40px;
      }
      .LikeSection {
        font-size: 40px;
        font-weight: bold;
        margin: 20px 50px 30px 50px;
        border-bottom: 2px solid #ffcb5e;
        // background-color: red;
        height: 60px;
        color: #58419c;
      }
    }
    .StarRatingSection {
      //position: relative;
      width: 1120px;
      height: 150px;
      //border: 3px solid #ffcb5e;
      border-bottom: 5px solid #58419c;
      //border-radius: 20px;
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
      input {
        float: left;
        width: 55%;
        height: 65%;
        border-radius: 10px;
        background-color: #f5f5f5;
        //margin: 10px 20px 10px 20px;
        margin: auto 0;
        margin-right: 30px;
        border: none;
      }
      button {
        background-color: #58419c;
        //margin: 10px 20px 10px 20px;
        width: 110px;
        height: 95px;
        border-radius: 10px;
        margin: auto 0;
        color: white;
        font-size: 16px;
        border: none;
        cursor: pointer;
      }
      .WriteStarRating {
        margin: auto 0;
        margin-right: 30px;
        font-size: 35px;
      }
    }
    .ReviewSection {
      //position: relative;
      width: 1000px;
      height: 150px;
      display: flex;
      justify-content: center;
      //background-color: #c6bce3;
      border-bottom: 3px solid #dfdbdb;

      .ResultStarRating {
        margin: auto 0;
        font-size: 20px;
        margin-right: 30px;
      }
      .ReviewContentBox {
        float: left;
        width: 80%;
        height: 70%;
        border-radius: 3px;
        background-color: #f5f5f5;
        //margin: 10px 20px 10px 20px;
        margin: auto 0;
        margin-right: 30px;
        border: none;
        margin: auto 0;

        .ReviewTop {
          width: 100%;
          height: 30%;
        }
        .ReviewNickname {
          font-size: 14px;
          margin: 10px 0 0px 20px;
          height: 30px;
          width: 300px;
          font-weight: bold;
          //background-color: green;
        }
        .ReviewModify {
          font-size: 12px;
          float: right;
          margin: 12px;
        }
        .ReviewDelete {
          font-size: 12px;
          float: right;
          margin: 12px;
        }
        .ReviewMiddle {
          width: 46%;
          position: absolute;
          height: 50px;
          display: block;
        }
        .ReviewContent {
          font-size: 18px;
          width: 600px;
          margin: 10px 0 10px 20px;
          font-weight: bold;
        }
        .ReviewDown {
          height: 15px;
          width: 30%;
          position: absolute;
          display: block;
        }
        .ReviewDate {
          font-size: 15px;
          float: right;
          bottom: 30px;
          right: 0;
          position: absolute;
          padding-left: -20px;
        }
      }
    }
  }
`;

// https://velog.io/@whoyoung90/TIL-35-WECODE-%EB%B3%84%EC%A0%90-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84
// 재시도

// 깃허브 별점댓글창 찾아보기

const DetailPage = () => {
  return (
    <>
      <Main>
        <Nav />
        <section className="Container">
          <header>
            <Link to="/">
              <img className="cvsLogo" src="img/cvs logo.png"></img>
            </Link>
          </header>
          <section className="HomeMain">
            <section className="itemSection">
              <img
                src="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8809802266629.jpg"
                alt="itemImage"
              />
              <section className="contentSection">
                <section className="TitleSection">
                  <p> 햄감자샐러드샌드위치</p>
                </section>
                <section className="PriceSection">
                  <p>가격: 3500원</p>
                </section>
                <section className="ExplaneSection">
                  <p>
                    상품설명: 지역 특산물 햇감자를 사용한 감자 샐러드를 넣은
                    샌드위치
                  </p>
                </section>
                <section className="LikeSection">
                  <p>♥</p>
                </section>
              </section>
            </section>
            <section className="StarRatingSection">
              <p className="WriteStarRating">⭐⭐⭐⭐⭐</p>
              <input></input>
              <button>Enter</button>
            </section>
            <section className="ReviewSection">
              <p className="ResultStarRating">⭐⭐⭐⭐⭐</p>
              <section className="ReviewContentBox">
                <section className="ReviewTop">
                  <section className="ReviewNickname">USERID1234</section>
                  <button className="ReviewDelete">삭제</button>
                  <button className="ReviewModify">수정</button>
                  <section className="ReviewMiddle">
                    <section className="ReviewContent">
                      너무 맛있어요 추천합니다!
                    </section>
                    <section className="ReviewDate">2023.01.11</section>
                  </section>
                </section>
              </section>
            </section>
          </section>
          <Footer />
        </section>
      </Main>
    </>
  );
};

export default DetailPage;
