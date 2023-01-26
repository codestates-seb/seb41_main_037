/* eslint-disable @typescript-eslint/no-redeclare */
import React, { useState, useEffect } from "react";
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
import { FaProductHunt, FaRegCommentDots } from "react-icons/fa";
import useFetch from "../../api/useFetch";
import { useParams } from "react-router-dom";

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
    width: 100%;
    height: 100%;
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

  .detailPageMain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    height: 100%;
    margin-top: 5rem;

    .itemSection {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 800px;
      height: 350px;
      border: 3px solid #ffcb5e;
      border-radius: 20px;

      img {
        width: 250px;
        height: 250px;
        margin: auto;
      }
      .contentSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 400px;
        height: 300px;
        margin-right: 30px;
        border-radius: 20px;
        font-family: "Do Hyeon", sans-serif;

        .titleSection {
          display: flex;
          align-items: flex-end;
          height: 50px;
          margin-bottom: 15px;
          padding-bottom: 5px;
          border-bottom: 7px solid #ffcb5e;
          font-size: 30px;
          font-weight: 500;
        }
        .priceSection {
          display: flex;
          align-items: flex-end;
          height: 50px;
          margin-bottom: 15px;
          padding-bottom: 5px;
          border-bottom: 2px solid #ffcb5e;
          font-size: 25px;
          font-weight: 400;
        }

        .likeSection {
          display: flex;
          align-items: flex-end;
          height: 50px;
          padding-bottom: 5px;
          color: #58419c;
          border-bottom: 2px solid #ffcb5e;
          font-size: 30px;
          font-weight: 400;

          .likeButton {
            margin-right: 5px;
            cursor: pointer;
          }
          .likeCountNum {
            font-size: 25px;
          }

          .countComment {
            display: flex;
            align-items: flex-end;
            margin-left: 30px;
            .commentIcon {
              display: flex;
              margin-right: 5px;
              font-size: 28px;
            }
            .commentCountNum {
              font-size: 25px;
            }
          }
        }
      }
    }
    .addCommentSection {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 800px;
      height: 200px;
      margin-bottom: 30px;
      border-bottom: 5px solid #58419c;

      .addStarRating {
        margin: 20px;
        color: #ffcb5e;
        font-size: 30px;
        cursor: pointer;
      }
      > textarea {
        width: 450px;
        height: 100px;
        padding: 10px;
        background-color: #f5f5f5;
        border: none;
        border-radius: 10px;
        resize: none;
        font-family: "Do Hyeon", sans-serif;
        &:focus {
          outline-color: #58419c;
        }
      }
      > button {
        width: 100px;
        height: 100px;
        margin: 20px;
        background-color: #58419c;
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 16px;
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
      display: flex;
      justify-content: center;
      align-items: center;
      width: 800px;
      height: 100%;
      margin-bottom: 20px;
      font-family: "Do Hyeon", sans-serif;
      letter-spacing: 0.3px;

      .resultStarRating {
        margin-bottom: 5px;
        color: #ffcb5e;
        font-size: 20px;
      }
      .commentBox {
        display: flex;
        flex-direction: column;
        width: 630px;
        height: 70%;
        margin-bottom: 20px;
        border-bottom: solid 2px #f5f5f5;

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
          height: 100%;
          font-size: 18px;
        }

        .commentInfo {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          font-size: 15px;

          .comment {
            height: 100%;
            width: 80%;
            line-height: 20px;
          }
          .commentDate {
            text-align: right;
            font-size: 15px;
          }
        }
      }
    }
  }
`;

interface ItemProps {
  img: string;
  name: string;
  price: number;
  fav: number;
  comment: number;
  convertPrice: void;
}

const Item = ({ img, name, price, fav, comment }: ItemProps) => {
  const [like, setLike] = useState(false);

  const convertPrice = (price: any) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <img src={img} alt="itemImage" />
      <section className="contentSection">
        <section className="titleSection">
          <p>{name}</p>
        </section>
        <section className="priceSection">
          <p>가격 : {convertPrice(price)}원</p>
        </section>
        <section
          className="likeSection"
          onClick={() => {
            setLike(!like);
          }}
        >
          {like ? (
            <HiHeart className="likeButton" />
          ) : (
            <HiOutlineHeart className="likeButton" />
          )}
          <div className="likeCountNum">{fav}</div>
          <section className="countComment">
            <FaRegCommentDots className="commentIcon" />
            <div className="commentCountNum">{comment}</div>
          </section>
        </section>
      </section>
    </>
  );
};

interface CommentProps {
  score: any;
  name: string;
  comment: string;
  date: string;
}

const Comment = ({ score, name, comment, date }: CommentProps) => {
  return (
    <>
      <section className="resultStarRating">
        <p className="resultStarRating">{score}</p>
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

  const { id } = useParams<any>();
  const { data: productData } = useFetch("/products?page=1&size=24");
  const { data: reviewData } = useFetch("/reviews?page=1&size=50");
  const [product, setProduct] = useState<any>(null);
  const [reviews, setReviews] = useState<any>(null);

  useEffect(() => {
    if (productData) {
      setProduct(
        productData.data.filter((item: any) => item.productId === Number(id))
      );
      setReviews(
        reviewData.data.filter((item: any) => item.productId === Number(id))
      );
    }
  }, [productData, reviewData, id]);

  const starRender = (rating: any) => {
    return (
      <>
        {Array(parseInt(rating))
          .fill(2)
          .map((el, i) => (
            <AiFillStar key={i} />
          ))}
        {Array(Math.floor(5 - rating))
          .fill(2)
          .map((el, i) => (
            <AiFillStar key={i} color="#E3E3E3" />
          ))}
      </>
    );
  };

  return (
    <>
      <Main>
        <Nav />
        <section className="container">
          <Header />
          <section className="detailPageMain">
            <section className="itemSection">
              {product &&
                product.map((item: any) => (
                  <Item
                    img={item.imgUrl}
                    name={item.productName}
                    price={item.price}
                    fav={item.favoriteCount}
                    comment={item.reviewCount}
                    convertPrice={item.price}
                  />
                ))}
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
                }}
              ></textarea>
              <button onClick={() => console.log(starRating)}>
                리뷰
                <br />
                등록
              </button>
            </section>
            <section className="commentSection">
              <section className="commentList">
                {reviews &&
                  reviews.map((comment: any) => (
                    <Comment
                      score={starRender(comment.rating)}
                      name={comment.username}
                      comment={comment.content}
                      date={comment.createdAt}
                    />
                  ))}
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
