import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {
  HiOutlineHeart,
  HiHeart,
  HiOutlinePencilAlt,
  HiOutlineTrash,
} from "react-icons/hi";

const Main = styled.main`
  display: flex;
  width: 100%;
  margin-bottom: 100px;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    margin-left: 100px;
    width: 100%;
    height: 100%;
  }

  header {
    height: 150px;
    margin-top: 50px;
    margin-bottom: 50px;

    .cvsLogo {
      width: 150px;
    }
  }

  .homeMain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    align-items: center;
    margin-top: 5rem;
    height: 100%;

    .itemSection {
      width: 800px;
      height: 400px;
      margin-bottom: 10px;
      border: 3px solid #ffcb5e;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      img {
        width: 250px;
        height: 250px;
        margin: auto;
      }
      .contentSection {
        background-color: #f5f5f5;
        width: 400px;
        height: 350px;
        float: left;
        margin: 20px;
        border-radius: 20px;
        .titleSection {
          font-size: 30px;
          font-weight: 500;
          margin: 50px 50px 20px 50px;
          border-bottom: 7px solid #ffcb5e;
          height: 70px;
          font-family: "Do Hyeon", sans-serif;
        }
        .priceSection {
          font-size: 25px;
          font-weight: 400;
          margin: 40px 50px 40px 50px;
          border-bottom: 2px solid #ffcb5e;
          height: 60px;
          font-family: "Do Hyeon", sans-serif;
        }
        .explaneSection {
          font-size: 15px;
          font-weight: bold;
          margin: 20px 50px 20px 50px;
          border-bottom: 2px solid #ffcb5e;
          height: 40px;
        }
        .likeSection {
          font-size: 40px;
          font-weight: bold;
          margin: 0px 50px 30px 50px;
          height: 60px;
          color: #58419c;
        }
      }
    }
    .addCommentSection {
      width: 800px;
      height: 200px;
      border-bottom: 5px solid #58419c;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;

      .addStarRating {
        margin: 20px;
        font-size: 20px;
        color: #ffcb5e;
      }
      > input {
        //float: left;
        width: 500px;
        height: 100px;
        border-radius: 10px;
        background-color: #f5f5f5;

        border: none;
      }
      > button {
        background-color: #58419c;
        width: 100px;
        height: 100px;
        border-radius: 10px;
        margin: 30px;
        color: white;
        font-size: 16px;
        border: none;
        cursor: pointer;
        &:hover {
          filter: brightness(1.2);
          transition: 0.5s;
          cursor: pointer;
        }
      }
    }
    .commentSection {
      width: 800px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 3px solid #dfdbdb;
      margin-bottom: 20px;

      .resultStarRating {
        font-size: 20px;
        color: #ffcb5e;
        margin-bottom: 5px;
      }
      .commentBox {
        width: 630px;
        height: 70%;
        border-radius: 3px;
        border: none;
        display: flex;
        flex-direction: column;

        .userInfo {
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          margin-bottom: 10px;
        }
        .userName {
          display: flex;
          align-items: center;
          font-size: 15px;
          font-weight: bold;
        }

        .userEdit {
          display: flex;
          align-items: center;
          font-size: 18px;
          height: 100%;
        }

        .commentInfo {
          display: flex;
          justify-content: space-between;
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 25px;

          .comment {
            height: 100%;
          }
          .commentDate {
            font-size: 15px;
          }
        }
      }
    }
  }
`;

// https://velog.io/@whoyoung90/TIL-35-WECODE-%EB%B3%84%EC%A0%90-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84
// 재시도

// 깃허브 별점댓글창 찾아보기

// const LikeButton = ({ like, onClick }) => {
//   return (
//       <LikeSection src={like?HeartImg:EmptyHeartImg} onClick={onClick} />
//   );
// };

const dummyComment = [
  "가볍게 당충전하기 딱 좋습니다. 먹고 나서 잔여감도 막 느껴지는게 별로 없어서 좋았어요. 최근에 투쁠원으로 두번 사먹었던것 같아요. 맛있습니다.",
  "편의점 커피중에 제일 맛있다 달고 시고 씁쓸함",
  "이거 없으면 못산다 꾸준히 2+1해주는 GS가 고맙다",
  "바리스타 중에 제일 달다",
  "투쁠원으로 안사서 다행이지 이걸 세개나 샀음 어쩔뻔했어... 참고로 당면버전 말고 불닭볶음면은 엄청 좋아하는 사람입니다",
  "이거 진짜 짱맛있음. 원래 기존 까르보불닭이나 무슨 치즈불닭이나 이런거 맛없어했던 사람인데, 이거 납작당면 버전, 특히 이 로제맛이 젤 맛있음.",
  "까르보(떡볶이버전), 일반불닭납작당면맛 먹어본 사람으로써 그냥 온리 로제가 짱맛. 나머지 까르보, 불닭납작당면은 진짜 너무 맛없었음",
  "칠성보다 탄산이 좀 더 적고 단맛이 강함",
  "이것도 gs pay 결제시 100원 행사 해당상품인가요?",
  "이 시리즈 맛있음 양 적어서 1+1할 때 사야 개꿀",
];

interface CommentProps {
  [key: string]: any;
}

const Comment = ({ name, comment, date }: CommentProps) => {
  return (
    <>
      <section className="resultStarRating">
        <p className="resultStarRating">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </p>
      </section>
      <section className="commentBox">
        <section className="userInfo">
          <div className="userName">{name}</div>
          <div className="userEdit">
            <HiOutlinePencilAlt />
            <HiOutlineTrash />
          </div>
        </section>
        <section className="commentInfo">
          <div className="comment">{comment}</div>
          <div className="commentDate">{date}</div>
        </section>
      </section>
    </>
  );
};

const DetailPage = () => {
  const [like, setLike] = useState(false);

  return (
    <>
      <Main>
        <Nav />
        <section className="container">
          <Header />
          <section className="homeMain">
            <section className="itemSection">
              <img
                src="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8809802266629.jpg"
                alt="itemImage"
              />
              <section className="contentSection">
                <section className="titleSection">
                  <p> 햄감자샐러드샌드위치</p>
                </section>
                <section className="priceSection">
                  <p>가격: 3500원</p>
                </section>
                {/* <section className="ExplaneSection">
                  <p>
                    상품설명: 지역 특산물 햇감자를 사용한 감자 샐러드를 넣은
                    샌드위치
                  </p>
                </section> */}
                <section
                  className="likeSection"
                  onClick={() => {
                    setLike(!like);
                  }}>
                  {like ? <HiHeart /> : <HiOutlineHeart />}
                </section>
              </section>
            </section>
            <section className="addCommentSection">
              <p className="addStarRating">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
              <input></input>
              <button>Enter</button>
            </section>
            <section className="commentSection">
              <section className="commentList">
                <Comment
                  name="유저1111"
                  comment="너무 맛있어요 정말 맛있어요"
                  date="2023-01-19"
                />
                <Comment
                  name="유저222"
                  comment="또 사먹어야지"
                  date="2023-01-19"
                />
                <Comment
                  name="유저222"
                  comment="또 사먹어야지"
                  date="2023-01-19"
                />
                <Comment
                  name="유저222"
                  comment="또 사먹어야지"
                  date="2023-01-19"
                />
              </section>
            </section>
          </section>
        </section>
      </Main>
      <Footer />
    </>
  );
};

export default DetailPage;
