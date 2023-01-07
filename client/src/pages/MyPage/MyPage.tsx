// import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";

const MypageMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  .mypageSection {
    display: flex;
    flex-direction: column;
    width: 700px;
    .userProfile {
      display: flex;
      img {
        width: 150px;
        height: 150px;
        border-radius: 3px;
        box-shadow: 2px 2px 3px #979595;
      }
      .userIntroduction,
      .changePassword {
        display: flex;
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
      h3 {
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }
      p {
        background-color: #f4f5f9;
        box-shadow: inset 1px 1px 2px #7a7979;
        font-size: 13px;
        border-radius: 5px;
        padding: 0.5rem;
        line-height: 20px;
        margin-bottom: 0.5rem;
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
        overflow-x: scroll;
        &::-webkit-scrollbar {
          display: none;
        }
        .wishItem {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #fff;
          box-shadow: 2px 2px 3px #7a7979;
          padding: 0.5rem;
          margin-right: 1rem;
          width: 150px;
          height: 220px;
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
            width: 134px;
            height: 134px;
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

interface WishItemProps {
  image: string;
  name: string;
  price: string;
  alt: string;
}

const WishItemCard = ({ image, name, price, alt }: WishItemProps) => {
  return (
    <div className="wishItem">
      <div className="closeIcon">
        <AiFillCloseCircle size="20" />
      </div>
      <img src={image} alt={alt} />
      <span className="itemName">{name}</span>
      <span className="itemPrice">{price}</span>
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

const dummyCommentList: string[] = [
  "가볍게 당충전하기 딱 좋습니다. 먹고 나서 잔여감도 막 느껴지는게 별로없어서 좋았어요. 최근에 투쁠원으로 두번 사먹었던것 같아요. 맛있습니다.",
  "오렌지는 없어서 교차구매 못하고 레몬 2개 사왔는데 음...취향은 타겠지만 저한테는 제로 음료중 거의 가장 맛없습니다.(제로 음료 폐인입니다)",
  "오렌지보다 레몬이 더 맛있어요",
  "밀크카라멜이나 메가톤바 좋아하시면 높은 확률로 마음에 드실 거예요 제입에는 초코보다 훨씬 맛있어요",
];

const MyPage = () => {
  const [isNameFocus, setIsNameFocus] = useState(false);
  const [isEmailFocus, setIsEmailFocus] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);
  const [isPasswordConfirmFocus, setIsPasswordConfirmFocus] = useState(false);

  return (
    <MypageMain>
      <section className="mypageSection">
        <section className="userProfile">
          <img
            src="https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMyAg/MDAxNjA0MjI5NDA4NDMy.5zGHwAo_UtaQFX8Hd7zrDi1WiV5KrDsPHcRzu3e6b8Eg.IlkR3QN__c3o7Qe9z5_xYyCyr2vcx7L_W1arNFgwAJwg.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%ED%8C%8C%EC%8A%A4%ED%85%94.jpg?type=w800"
            alt="userImage"
          />
          <section className="userIntroduction">
            <ProfileElementCard
              classname="nickname"
              title="Nickname"
              content="Kelly"
              placeholder="Enter your nickname"
              state={isNameFocus}
              setState={setIsNameFocus}
            />
            <ProfileElementCard
              classname="email"
              title="Email"
              content="testuser@gmail.com"
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
          {dummyCommentList.map((comment, idx) => (
            <p key={idx}>{comment}</p>
          ))}
        </section>
        <section className="wishList">
          <h3>Wish list</h3>
          <section className="wishItems">
            <WishItemCard
              image="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8801068396300.jpg"
              name="햄)모짜치즈볼트리플버거"
              price="3,400원"
              alt="wish1"
            />
            <WishItemCard
              image="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/880980226317.jpg"
              name="도)백종원완전한판정식"
              price="4,500원"
              alt="wish2"
            />

            <WishItemCard
              image="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8801771025580.jpg"
              name="주)토끼정햄계란마요"
              price="1,700원"
              alt="wish3"
            />
            <WishItemCard
              image="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8809196616536.jpg"
              name="도)직화고추장삼겹살"
              price="5,300원"
              alt="wish4"
            />
            <WishItemCard
              image="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8801068402872.jpg"
              name="도)탄단지그릴닭가슴살볼"
              price="4,800원"
              alt="wish5"
            />
          </section>
        </section>
        <section className="buttonSection">
          <button>수정하기</button>
          <button>탈퇴하기</button>
        </section>
      </section>
    </MypageMain>
  );
};

export default MyPage;
