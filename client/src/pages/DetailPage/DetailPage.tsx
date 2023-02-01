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
import { FaRegCommentDots } from "react-icons/fa";
import useFetch from "../../api/useFetch";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { LoginState } from "../../states/LoginState";

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
          -ms-user-select: none;
          -moz-user-select: -moz-none;
          -khtml-user-select: none;
          -webkit-user-select: none;
          user-select: none;
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
          > button {
            background-color: #58419c;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 13px;
            font-family: "Do Hyeon", sans-serif;
            cursor: pointer;
            &:hover {
              filter: brightness(1.2);
              transition: 0.5s;
              cursor: pointer;
            }
          }
          .editBtn {
            &:hover {
              cursor: pointer;
            }
          }
          .deleteBtn {
            &:hover {
              cursor: pointer;
            }
          }
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
            > textarea {
              height: 100%;
              width: 100%;
              border-color: #58419c;
              border-radius: 5px;
              resize: none;
              font-family: "Do Hyeon", sans-serif;
              &:focus {
                outline-color: #58419c;
              }
            }
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

const DetailPage = () => {
  const { id } = useParams();
  const { data } = useFetch(`/products/${id}`);
  const [product, setProduct] = useState<any>(null);
  const [reviews, setReviews] = useState<any>(null);

  const [input, setInput] = useState("");

  const isLogin = useRecoilValue(LoginState);
  const [isModify, setIsModify] = useState(false);
  const [isEditSelect, setIsEditSelect] = useState<any>(false);

  useEffect(() => {
    if (data) {
      setProduct(data.data);
      setReviews(
        data.data.reviews.sort((a: any, b: any): number => {
          return b.reviewId - a.reviewId;
        })
      );
    }
  }, [data, id]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setInput(e.target.value);

  const handleUpdate = (idx: number) => {
    const newArr = Array(reviews.length).fill(false);
    newArr[idx] = true;
    setIsEditSelect(newArr);
    setIsModify(!isModify);
  };

  // 별점 추가
  const [clicked, setCliked] = useState([false, false, false, false, false]);
  const starArr = [0, 1, 2, 3, 4];

  const handleStarClick = (idx: number) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= idx ? true : false;
    }
    setCliked(clickStates);
  };

  let starRating = clicked.filter(Boolean).length;

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

  // 댓글 추가
  const addComment = () => {
    axios
      .post(
        `http://43.201.135.238:8080/reviews/${id}`,
        {
          content: input,
          rating: starRating,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => alert("리뷰를 5자 이상 작성하세요."));
    window.location.replace(`/products/${id}`);
  };

  //댓글 삭제
  const removeComment = (id: number) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      // 댓글 수정
      if (reviews) {
        axios
          .delete(`http://43.201.135.238:8080/reviews/${id}`, {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          })
          .catch((err) => alert("리뷰 삭제에 실패했습니다"));
        setReviews(reviews.filter((review: any) => review.reviewId !== id));
      }
      alert("삭제되었습니다.");
    } else {
      alert("취소합니다.");
    }
  };

  interface ItemProps {
    img: string;
    name: string;
    price: number;
    fav: number;
    comment: number;
    convertPrice: number;
  }

  const Item = ({ img, name, price, fav, comment }: ItemProps) => {
    const [like, setLike] = useState(false);

    const convertPrice = (price: number) => {
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
          <section className="likeSection">
            {like ? (
              <HiHeart
                className="likeButton"
                onClick={() => {
                  setLike(!like);
                }}
              />
            ) : (
              <HiOutlineHeart
                className="likeButton"
                onClick={() => {
                  setLike(!like);
                }}
              />
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
    isSelected: any;
    elementIndex: any;
    id: number;
    userId: any;
    score: any;
    name: string;
    review: any;
    date: string;
    star: number;
    onRemove: any;
  }

  const Comment = ({
    isSelected,
    elementIndex,
    id,
    userId,
    score,
    name,
    review,
    date,
    star,
    onRemove,
  }: CommentProps) => {
    // 수정된 댓글을 담는 상태
    const [modifiedComment, setModifiedCommnt] = useState(review);

    // 초기 별점의 상태를 설정
    let defaultStar = [false, false, false, false, false];
    for (let i = 0; i < star; i++) {
      defaultStar[i] = true;
    }

    // 수정된 별점의 상태를 담는 상태
    const [clickedStar, setClikedStar] = useState(defaultStar);
    const modifiedStarArr = [0, 1, 2, 3, 4];

    // 별점의 상태를 수정하는 핸들러
    const handlemodifiedStarClick = (idx: number) => {
      let clickStates = [...clickedStar];
      for (let i = 0; i < 5; i++) {
        clickStates[i] = i <= idx ? true : false;
      }
      setClikedStar(clickStates);
    };

    // 수정된 별점을 담는 변수
    let modifiedStarRating = clickedStar.filter(Boolean).length;

    // 댓글 상태를 수정하는 핸들러
    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setModifiedCommnt(e.target.value);
    };

    const editComment = (id: number) => {
      if (reviews) {
        console.log(modifiedStarRating);
        axios
          .patch(
            `http://43.201.135.238:8080/reviews/${id}`,
            {
              content: modifiedComment,
              rating: modifiedStarRating,
            },
            {
              headers: {
                Authorization: localStorage.getItem("token"),
              },
            }
          )
          .then(() => {
            window.location.reload();
          })
          .catch(() => {
            alert("리뷰를 5자 이상 작성하세요.");
          });
      }
      setIsModify(!isModify);
    };

    return (
      <>
        <section className="resultStarRating">
          {isLogin && isModify && isSelected ? (
            <p className="resultStarRating">
              {modifiedStarArr.map((star) =>
                clickedStar[star] ? (
                  <AiFillStar
                    key={star}
                    onClick={() => handlemodifiedStarClick(star)}
                  />
                ) : (
                  <AiOutlineStar
                    key={star}
                    onClick={() => handlemodifiedStarClick(star)}
                  />
                )
              )}
            </p>
          ) : (
            <p className="resultStarRating">{score}</p>
          )}
        </section>
        <section className="commentBox">
          <section className="userInfo">
            <div className="userName">{name}</div>
            {isLogin && isModify && isSelected ? (
              <div className="userEdit">
                <button onClick={() => editComment(id)}>수정</button>
                <HiOutlineTrash className="deleteBtn" onClick={onRemove} />
              </div>
            ) : (
              isLogin &&
              userId === Number(localStorage.getItem("memberID")) && (
                <div className="userEdit">
                  <HiOutlinePencilAlt
                    className="editBtn"
                    onClick={() => handleUpdate(elementIndex)}
                  />
                  <HiOutlineTrash className="deleteBtn" onClick={onRemove} />
                </div>
              )
            )}
          </section>
          <section className="commentInfo">
            <div className="comment">
              {isLogin && isModify && isSelected ? (
                <textarea
                  value={modifiedComment}
                  key={id}
                  maxLength={300}
                  onChange={handleCommentChange}
                ></textarea>
              ) : (
                <pre>{review}</pre>
              )}
            </div>
            <div className="commentDate">{date}</div>
          </section>
        </section>
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
              {product && (
                <Item
                  img={product.imgUrl}
                  name={product.productName}
                  price={product.price}
                  fav={product.favoriteCount}
                  comment={product.reviewCount}
                  convertPrice={product.price}
                />
              )}
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
                placeholder="리뷰를 작성하세요."
                maxLength={300}
                onChange={onChange}
              ></textarea>
              <button onClick={addComment}>
                리뷰
                <br />
                등록
              </button>
            </section>
            <section className="commentSection">
              <section className="commentList">
                {reviews &&
                  reviews.map((review: any, index: number) => (
                    <Comment
                      key={index}
                      isSelected={isEditSelect[index]}
                      elementIndex={index}
                      id={review.reviewId}
                      userId={review.memberId}
                      score={starRender(review.rating)}
                      name={review.username}
                      review={review.content}
                      date={review.createdAt}
                      star={review.rating}
                      onRemove={() => removeComment(review.reviewId)}
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
