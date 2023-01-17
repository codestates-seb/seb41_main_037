// import React from "react";
import styled from "styled-components";
import HomeHeader from "../../../components/AdminHeader/AdminHeader";
import AdminNav from "../../../components/AdminNav/AdminNav";
import { RxMagnifyingGlass } from "react-icons/rx";
import { BsTrashFill } from "react-icons/bs";

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const CommentDeletePageMain = styled.main`
  font-family: "Do Hyeon", sans-serif;
  margin: 100px 0 0 100px;
  .commentTitle {
    display: flex;
    justify-content: flex-start;
    font-size: 24px;
    margin-bottom: 1rem;
  }
  .searchBarSection {
    position: relative;
    width: 700px;
    height: 40px;
    margin-bottom: 1rem;
    input {
      font-family: "Do Hyeon", sans-serif;
      width: 700px;
      height: 40px;
      font-size: 15px;
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
      top: 7px;
      right: 10px;
      color: #58419c;
    }
  }
  .commentSection {
    width: 700px;
    max-height: 500px;
    border-radius: 5px;
    background-color: #d9d9d9;
    padding: 0.5rem;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: #f5f5f5;
    }
    .comment {
      display: flex;
      border-radius: 3px;
      align-items: center;
      margin: 1rem;
      padding: 0.5rem;
      justify-content: space-between;
      background-color: #f5f5f5;
      box-shadow: inset 1px 1px 2px #7a7979;
      p:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 45px;
        max-height: 20px;
        border-radius: 5px;
        font-size: 15px;
        color: #fff;
        padding: 0.5rem;
        background-color: #7a7979;
        width: 10%;
        box-shadow: 1px 1px 1px #222222;
      }
      p:nth-child(2) {
        font-size: 15px;
        line-height: 20px;
        width: 85%;
      }
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 5%;
        width: 20px;
        height: 20px;
        background-color: #7a7979;
        color: #fff;
        border-radius: 30px;
        &:hover {
          transform: rotate(20deg);
          transition: 0.2s;
          background-color: #383838;
        }
      }
    }
  }
`;

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

const CommentDeletePage = () => {
  return (
    <>
      <HomeHeader />
      <Main>
        <AdminNav />
        <CommentDeletePageMain>
          <section className="commentTitle">
            <h2>리뷰삭제</h2>
          </section>
          <section className="searchBarSection">
            <input type="text" placeholder="검색어를 입력하세요." />
            <RxMagnifyingGlass className="search icon" size={25} />
          </section>
          <section className="commentSection">
            {dummyComment.map((comment, idx) => (
              <section className="comment" key={idx}>
                {/* 작성자 id로 대체할 부분 */}
                <p>id: {idx}</p>
                <p>{comment}</p>
                <div className="icon">
                  <BsTrashFill size={12} />
                </div>
              </section>
            ))}
          </section>
        </CommentDeletePageMain>
      </Main>
    </>
  );
};

export default CommentDeletePage;
