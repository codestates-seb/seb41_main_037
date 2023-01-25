import React, { useEffect } from "react";
import { useRef, useState } from "react";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import useFetch from "../../api/useFetch";

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
    @media screen and(min-width: 1024px) {
      width: 850px;
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
      padding: 1rem 1rem 0.5rem 1rem;
      max-height: 300px;
      h3 {
        color: #fff;
        font-size: 18px;
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
      padding: 1rem;

      h3 {
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }
      .wishItems {
        display: flex;
        justify-content: center;
        &::-webkit-scrollbar {
          display: none;
        }
        .wishItem {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          background-color: #fff;
          box-shadow: 2px 2px 3px #7a7979;
          padding: 0.5rem;
          margin-right: 1rem;
          width: 150px;
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

const StyledSlider = styled(Slider)`
  display: flex;
  height: 230px;
  @media screen and (max-width: 767px) {
    width: 470px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 620px;
  }
  @media screen and (min-width: 1024px) {
    width: 650px;
  }

  justify-content: center;
  .slick-slide div {
    cursor: pointer;
  }
  .slick-prev,
  .slick-next {
    top: 45%;
  }
  .slick-dots {
    bottom: -15px;
  }
  .slick-dots li button:before {
    line-height: 0px;

    color: #58419c;
  }
  .slick-dots li.slick-active button:before {
    color: #58419c;
  }
`;

const WishItemCard = ({ id, image, name, price, alt }: WishProps) => {
  return (
    <div className="wishItem" key={id}>
      <div className="closeIcon">
        <AiFillCloseCircle size="20" />
      </div>
      <img src={image} alt={alt} />
      <span className="itemName">{name}</span>
      <span className="itemPrice">{price}원</span>
    </div>
  );
};

interface ProfileProps {
  classname: string;
  title: string;
  content: string;
  placeholder: string;
  state: boolean;
  setState: (state: boolean) => void;
}

// interface CommentProps {
//   store: string;
//   date: string;
//   comment: string;
// }

interface WishProps {
  id: number;
  image: string;
  name: string;
  price?: string;
  alt: string;
}

// interface ReviewProps {
//   reviewId: number;
//   content: string;
//   createdAt: string;
//   modifiedAt: string;
//   rating: number;
//   username: "전인종";
//   memberId: number;
//   productId: number;
// }

const MyPage = () => {
  const navigate = useNavigate();
  const [isNameFocus, setIsNameFocus] = useState(false);
  const [isEmailFocus, setIsEmailFocus] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);
  const [isPasswordConfirmFocus, setIsPasswordConfirmFocus] = useState(false);

  const { data } = useFetch("/members/1");
  const [member, setMember] = useState<any>(null);
  const [reviews, setReviews] = useState<any>(null);
  const [favorites, setFavorites] = useState<any>(null);
  useEffect(() => {
    if (data) {
      setMember(data);
      setReviews(data.reviews);
      setFavorites(data.favorites);
    }
  }, [data]);

  console.log(member);
  console.log(reviews);
  console.log(favorites);

  const ProfileElementCard = ({
    classname,
    title,
    content,
    placeholder,
    state,
    setState,
  }: ProfileProps) => {
    return (
      <section className={classname}>
        <h3>{title}</h3>
        {state ? (
          <input
            type="text"
            placeholder={placeholder}
            onKeyUp={(e) => e.key === "Enter" && setState(!state)}
            autoFocus
          />
        ) : (
          <p onClick={() => setState(!state)}>{content}</p>
        )}
      </section>
    );
  };

  const [image, setImage] = useState(
    "https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMyAg/MDAxNjA0MjI5NDA4NDMy.5zGHwAo_UtaQFX8Hd7zrDi1WiV5KrDsPHcRzu3e6b8Eg.IlkR3QN__c3o7Qe9z5_xYyCyr2vcx7L_W1arNFgwAJwg.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%ED%8C%8C%EC%8A%A4%ED%85%94.jpg?type=w800"
  );
  const fileInput = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleUpdate = () => {
    console.log(image);
  };

  const settings = {
    arrows: true,
    dots: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
    ],
  };

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
                  src={image}
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
                  <ProfileElementCard
                    classname="nickname"
                    title="Nickname"
                    content={member && member.nickname}
                    placeholder="Enter your nickname"
                    state={isNameFocus}
                    setState={setIsNameFocus}
                  />
                  <ProfileElementCard
                    classname="email"
                    title="Email"
                    content={member && member.email}
                    placeholder="Enter your email"
                    state={isEmailFocus}
                    setState={setIsEmailFocus}
                  />
                </section>
                <section className="changePassword">
                  <ProfileElementCard
                    classname="password"
                    title="Password"
                    content="***********"
                    placeholder="Enter your password"
                    state={isPasswordFocus}
                    setState={setIsPasswordFocus}
                  />
                  <ProfileElementCard
                    classname="passwordComfirm"
                    title="Password Confirm"
                    content="***********"
                    placeholder="Enter your password"
                    state={isPasswordConfirmFocus}
                    setState={setIsPasswordConfirmFocus}
                  />
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
                        onClick={() => navigate("/itemList/:itemid")}
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
                  {favorites && (
                    <StyledSlider {...settings}>
                      {favorites.map((wishItem: any) => {
                        return (
                          <WishItemCard
                            id={wishItem.favoriteId}
                            image={wishItem.imgUrl}
                            name={wishItem.productName}
                            price={wishItem.price}
                            alt="img"
                          />
                        );
                      })}
                    </StyledSlider>
                  )}
                </section>
              </section>
              <section className="buttonSection">
                <button onClick={handleUpdate}>수정하기</button>
                <button>탈퇴하기</button>
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
