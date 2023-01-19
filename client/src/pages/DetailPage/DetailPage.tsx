import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
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
      align-items: center;
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
        font-family: "Do Hyeon", sans-serif;
        .titleSection {
          font-size: 30px;
          font-weight: 500;
          margin: 50px 50px 20px 50px;
          border-bottom: 7px solid #ffcb5e;
          height: 70px;
        }
        .priceSection {
          font-size: 25px;
          font-weight: 400;
          margin: 40px 50px 40px 50px;
          border-bottom: 2px solid #ffcb5e;
          height: 60px;
        }
        .explaneSection {
          font-size: 15px;
          font-weight: bold;
          margin: 20px 50px 20px 50px;
          border-bottom: 2px solid #ffcb5e;
          height: 40px;
        }
        .likeSection {
          font-size: 30px;
          font-weight: bold;
          margin: 0px 50px 30px 50px;
          height: 60px;
          color: #58419c;

          .Likebutton {
            cursor: pointer;
          }
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
        font-size: 30px;
        color: #ffcb5e;
        cursor: pointer;
      }
      > textarea {
        width: 450px;
        height: 100px;
        border-radius: 10px;
        background-color: #f5f5f5;
        border: none;
        resize: none;
        padding: 10px;
        font-family: "Do Hyeon", sans-serif;
        &:focus {
          outline-color: #58419c;
        }
      }
      > button {
        background-color: #58419c;
        width: 100px;
        height: 100px;
        border-radius: 10px;
        margin: 20px;
        color: white;
        font-size: 16px;
        border: none;
        font-family: "Do Hyeon", sans-serif;
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
      margin-bottom: 20px;
      font-family: "Do Hyeon", sans-serif;
      letter-spacing: 0.3px;

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
          //border-bottom: 3px solid #dfdbdb;
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
          font-size: 15px;
          //font-weight: bold;
          margin-bottom: 25px;

          .comment {
            height: 100%;
            width: 80%;
            line-height: 20px;
          }
          .commentDate {
            font-size: 15px;
            text-align: right;
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
  const [clicked, setCliked] = useState([false, false, false, false, false]);
  const starArr = [0, 1, 2, 3, 4];
  const handleStarClick = (idx: number) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= idx ? true : false;
    }
    setCliked(clickStates);
  };

  // 별점 => post할 때 이 변수 이용할 것
  let starRating = clicked.filter(Boolean).length;

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
                  <p>가격 : 3500원</p>
                </section>
                <section
                  className="likeSection"
                  onClick={() => {
                    setLike(!like);
                  }}>
                  {like ? <HiHeart className="Likebutton" /> : <HiOutlineHeart className="Likebutton" />}
                </section>
              </section>
            </section>
            <section className="addCommentSection">
              <p className="addStarRating">
                {starArr.map((star) =>
                  clicked[star] ? (
                    <AiFillStar
                      key={star}
                      onClick={() => handleStarClick(star)}
                    />
                  ) : (
                    <AiOutlineStar
                      key={star}
                      onClick={() => handleStarClick(star)}
                    />
                  )
                )}
              </p>
              <textarea
                onChange={(e) => {
                  console.log(e.target.value);
                }}></textarea>
              <button onClick={() => console.log(starRating)}>OK !</button>
            </section>
            <section className="commentSection">
              <section className="commentList">
                <Comment
                  name="ABC123"
                  comment="내일 또 사먹어야지"
                  date="2023-01-19"
                />
                <Comment
                  name="편의점리뷰어"
                  comment="너무 맛있어요 정말 맛있어요"
                  date="2023-01-19"
                />
                <Comment
                  name="프엔개발자"
                  comment="맛있습니다 다른 제품보다 내용물이 많아서 간식으로 먹기 좋았습니다 가격도 3500원이면 적당한 것 같네요"
                  date="2023-01-13"
                />
                <Comment
                  name="샌드위치좋아"
                  comment="샌드위치 좋아해서 사봤는데 정말 맛있습니다! 자주 먹고 싶은데 재고가 잘 없네요  단종시키지 말아주세요!"
                  date="2023-01-10"
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
