import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import useFetch from "../../api/useFetch";
import axios from "axios";
import { AiFillCloseCircle } from "react-icons/ai";
import { useSetRecoilState } from "recoil";
import { LoginState } from "../../states/LoginState";

const Container = styled.main`
  display: flex;
  width: 100%;
  margin-bottom: 100px;

  .mainContainer {
    display: flex;
    width: calc(100% - 100px);
    flex-direction: column;
    align-items: center;
    margin-left: 100px;
  }
`;

const MypageMain = styled.main`
  font-family: "Do Hyeon", sans-serif;
  .mypageSection {
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
      width: 550px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      width: 700px;
    }
    @media screen and (min-width: 1024px) {
      max-width: 822px;
    }

    .userProfile {
      display: flex;
      @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
      }
      img {
        display: flex;
        width: 150px;
        height: 150px;
        border-radius: 3px;
        box-shadow: 2px 2px 3px #979595;
      }
      input {
        display: flex;
      }
      .userIntroduction,
      .changePassword {
        flex-direction: column;
        justify-content: flex-start;
        margin-left: 1rem;

        h3 {
          display: flex;
          font-size: 18px;
          font-weight: 600;
          margin-top: 0.5rem;
        }
        p {
          display: flex;
          align-items: center;
          padding: 0 0.5rem;
          margin: 0.5rem 0;
          width: 259px;
          @media screen and (min-width: 1024px) {
            width: 320px;
          }
          height: 30px;
          color: #fff;
          background-color: #979595;
          border-radius: 3px;
        }
        input {
          display: flex;
          align-items: center;
          box-shadow: 2px 2px 3px #979595;
          border: none;
          padding: 0 0.5rem;
          margin: 0.5rem 0;
          width: 259px;
          height: 30px;
          border-radius: 3px;
          &:focus-within {
            outline: none;
            border: 1px solid #979595;
            box-shadow: 3px 3px 3px #7a7979;
          }
        }
      }
    }
    .commentList {
      display: flex;
      flex-direction: column;
      background-color: #ffcb5e;
      border-radius: 5px;
      margin: 1.5rem 0 1rem 0;
      padding: 1rem 1rem 0.5rem 1.5rem;
      max-height: 300px;
      h3 {
        color: #fff;
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }
      .commentSection {
        overflow-y: scroll;
        &::-webkit-scrollbar {
          width: 6px;
        }
        &::-webkit-scrollbar-track {
          background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 5px;
          background-color: #58419c;
        }
        .comment {
          display: flex;
          background-color: rgb(244, 245, 249);
          border-radius: 5px;
          margin-bottom: 0.5rem;
          box-shadow: inset 1px 1px 2px #7a7979;
          align-items: center;
          cursor: pointer;
          .store {
            display: flex;
            justify-content: center;
            min-width: 80px;
            color: #58419c;
          }
          .content {
            box-shadow: inset 1px 1px 2px #7a7979;
            width: 100%;
            border-radius: 0 5px 5px 0;
            p {
              font-size: 15px;
              padding: 0.2rem 0.5rem;
              line-height: 20px;
              &:nth-child(2) {
                font-size: 13px;
                color: #7a7979;
              }
            }
          }
        }
      }
    }
    .wishList {
      display: flex;
      flex-direction: column;
      background-color: #ffcb5e;
      border-radius: 5px;
      margin: 0.5rem 0;
      padding: 1rem 1.5rem;

      h3 {
        color: #fff;
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }
      .wishItems {
        display: flex;
        overflow-x: scroll;
        &::-webkit-scrollbar {
          height: 6px;
        }
        &::-webkit-scrollbar-track {
          background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 5px;
          background-color: #58419c;
        }
        .wishItem {
          display: flex;
          margin: 0.5rem 0;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          background-color: #fff;
          box-shadow: 2px 2px 3px #7a7979;
          padding: 0.5rem;
          margin-right: 1rem;
          min-width: 155px;
          height: 200px;
          border-radius: 10px;
          .closeIcon {
            display: flex;
            width: 100%;
            justify-content: flex-end;
            color: #58419c;
            &:hover {
              filter: brightness(1.3);
            }
          }
          img {
            width: 110px;
            height: 110px;
          }
          .itemName {
            font-size: 13px;
            font-weight: 600;
          }
          .itemPrice {
            font-size: 12px;
            margin: 0.5rem 0;
          }
        }
      }
    }
    .buttonSection {
      display: flex;
      justify-content: flex-end;
      button:nth-child(1) {
        border: none;
        font-family: "Do Hyeon", sans-serif;
        background-color: #58419c;
        box-shadow: 2px 2px 3px #7a7979;
        border-radius: 30px;
        color: #fff;
        width: 80px;
        height: 40px;
        margin: 0.5rem 0.3rem 1rem 0;
        &:hover {
          filter: brightness(1.2);
          transition: 0.3s;
        }
      }
      button:nth-child(2) {
        border: none;
        font-family: "Do Hyeon", sans-serif;
        background-color: #979595;
        box-shadow: inset 2px 2px 2px #7a7979;
        border-radius: 30px;
        color: #fff;
        width: 80px;
        height: 40px;
        margin: 0.5rem 0 1rem 0.3rem;
        &:hover {
          filter: brightness(0.8);
          transition: 0.3s;
        }
      }
    }
  }
`;

interface WishProps {
  id: number;
  image: string;
  name: string;
  price?: string;
  alt: string;
  productId: number;
}

const MyPage = () => {
  const navigate = useNavigate();

  const { data } = useFetch(`/members/${localStorage.getItem("memberID")}`);
  const [member, setMember] = useState<any>(null);
  const [reviews, setReviews] = useState<any>(null);
  const [favorites, setFavorites] = useState<any>(null);

  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [isModify, setIsModify] = useState(false);

  const setIsLogin = useSetRecoilState(LoginState);
  useEffect(() => {
    if (data) {
      setMember(data);
      setReviews(data.reviews);
      setFavorites(data.favorites);
      setNickname(data.nickname);
    }
  }, [data]);

  const WishItemCard = ({
    id,
    image,
    name,
    price,
    alt,
    productId,
  }: WishProps) => {
    const handleDelete = (id: number) => {
      axios
        .get(`http://43.201.135.238:8080/favorite/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setFavorites(
            favorites.filter((favorite: any) => favorite.productId !== id)
          );
        })
        .catch((err) => alert("찜 목록 삭제에 실패했습니다"));
    };
    return (
      <div className="wishItem" key={id}>
        <div className="closeIcon">
          <AiFillCloseCircle
            onClick={() => handleDelete(productId)}
            size="20"
          />
        </div>
        <img src={image} alt={alt} />
        <span className="itemName">{name}</span>
        <span className="itemPrice">{price}원</span>
      </div>
    );
  };

  const [image, setImage] = useState(
    "https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMyAg/MDAxNjA0MjI5NDA4NDMy.5zGHwAo_UtaQFX8Hd7zrDi1WiV5KrDsPHcRzu3e6b8Eg.IlkR3QN__c3o7Qe9z5_xYyCyr2vcx7L_W1arNFgwAJwg.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%ED%8C%8C%EC%8A%A4%ED%85%94.jpg?type=w800"
  );

  // const [test, setTest] = useState<any>(null);

  const fileInput = useRef<HTMLInputElement>(null);

  const reader = new FileReader();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // setTest(e.target.files[0]);
      // console.log(e.target.files);
      // console.log(e.target.files[0]);
      // axios
      //   .get("http://43.201.135.238:8080/upload", {
      //     params: { multipartFileList: e.target.files[0] },
      //     headers: {
      //       Authorization: localStorage.getItem("token"),
      //     },
      //   })
      //   .then((res) => {
      //     setImage(res.data);
      //     console.log(res.data);
      //   })
      //   .catch((err) => console.log(err));

      reader.onload = function (e) {
        if (typeof e.target?.result === "string") {
          setImage(e.target.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirm(e.target.value);
  };

  const handleUpdate = () => {
    setIsModify(!isModify);
    console.log(image);
  };

  const handleUpdateDone = () => {
    if (
      nickname &&
      password &&
      passwordConfirm &&
      password === passwordConfirm &&
      password.match(/^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,}$/)
    ) {
      axios
        .patch(
          `http://43.201.135.238:8080/members/${localStorage.getItem(
            "memberID"
          )}`,
          {
            image_name: "myimg",
            // image_path: image,
            memberId: localStorage.getItem("memberID"),
            nickname: nickname,
            password: password,
            role: 0,
          },
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then(() => window.location.reload())
        .catch((err) => alert("회원정보 수정에 실패했습니다"));
    }
    setIsModify(!isModify);
  };

  const handleDeleteAccount = (id: number) => {
    axios
      .delete(`http://43.201.135.238:8080/members/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(() => {
        alert("탈퇴에 성공했습니다");
        localStorage.removeItem("token");
        localStorage.removeItem("memberID");
        localStorage.removeItem("role");
        setIsLogin(false);
        navigate("/");
      })
      .catch((err) => alert("탈퇴에 실패했습니다"));
  };
  // console.log(member);

  return (
    <>
      <Container>
        <Nav />
        <section className="mainContainer">
          <Header />
          <MypageMain>
            <section className="mypageSection">
              <section className="userProfile">
                <img
                  src={member && member.image_path ? member.image_path : image}
                  alt="userImage"
                  onClick={() => fileInput.current?.click()}
                />
                <input
                  type="file"
                  accept="image/jpg, image/png, image/jpeg"
                  ref={fileInput}
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
                <section className="userIntroduction">
                  <section className="nickname">
                    <h3>Nickname</h3>
                    {isModify ? (
                      <input
                        type="text"
                        placeholder="Enter your nickname"
                        value={nickname || ""}
                        onChange={handleNicknameChange}
                      />
                    ) : (
                      <p>{member && member.nickname}</p>
                    )}
                  </section>
                  <section className="email">
                    <h3>Email</h3>
                    <p>{member && member.email}</p>
                  </section>
                </section>
                <section className="changePassword">
                  <section className="password">
                    <h3>Password</h3>
                    {isModify ? (
                      <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    ) : (
                      <p>***********</p>
                    )}
                  </section>
                  <section className="passwordComfirm">
                    <h3>Password Confirm</h3>
                    {isModify ? (
                      <input
                        type="password"
                        placeholder="Enter your password"
                        value={passwordConfirm}
                        onChange={handlePasswordConfirmChange}
                      />
                    ) : (
                      <p>***********</p>
                    )}
                  </section>
                </section>
              </section>
              <section className="commentList">
                <h3>Comment list</h3>
                <section className="commentSection">
                  {reviews &&
                    reviews.map((review: any) => (
                      <section
                        className="comment"
                        key={review.reviewId}
                        onClick={() =>
                          navigate(`/products/${review.productId}`)
                        }
                      >
                        <section className="store">
                          {review.productCategory}
                        </section>
                        <section className="content">
                          <p>{review.content}</p>
                          <p>{review.createdAt}</p>
                        </section>
                      </section>
                    ))}
                </section>
              </section>
              <section className="wishList">
                <h3>Wish list</h3>
                <section className="wishItems">
                  {favorites &&
                    favorites.map((wishItem: any) => {
                      return (
                        <WishItemCard
                          id={wishItem.favoriteId}
                          image={wishItem.imgUrl}
                          name={wishItem.productName}
                          price={wishItem.price}
                          productId={wishItem.productId}
                          alt="img"
                        />
                      );
                    })}
                </section>
              </section>
              <section className="buttonSection">
                {isModify ? (
                  <button onClick={handleUpdateDone}>수정완료</button>
                ) : (
                  <button onClick={handleUpdate}>수정하기</button>
                )}
                <button onClick={() => handleDeleteAccount(member.memberId)}>
                  탈퇴하기
                </button>
              </section>
            </section>
          </MypageMain>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default MyPage;
