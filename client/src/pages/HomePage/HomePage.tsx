// import React from "react";
import styled, { keyframes } from "styled-components";
import Dots from "../../components/Dots/Dots";
import React, { useState, useEffect, useRef } from "react";
import HomeHeader from "../../components/AdminHeader/AdminHeader";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaPencilAlt } from "react-icons/fa";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { RiMailStarFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import { slideInRight } from "react-animations";

const slideInAnimation = keyframes`${slideInRight}`;

const HomeMain = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
  .outer {
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    /* 화면에서 스크롤바 안보이게 */
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .inner {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
  }

  .pageOne {
    background-color: #ffcb5e;
    display: flex;
    flex-direction: column;
    font-family: "Do Hyeon", sans-serif;
    color: #fff;
    .content {
      display: flex;
      .leftSection {
        display: flex;
        flex-direction: column;
        width: 60%;
        margin-left: 100px;
        min-width: 600px;
        .icon {
          color: #7a7979;
        }
        h1 {
          color: #58419c;
          font-size: 60px;
          margin-bottom: 1rem;
        }
        p {
          display: flex;
          color: #fff;
          font-size: 30px;
          line-height: 40px;
        }
        .buttonSection {
          display: flex;
          button {
            border: none;
            padding: 0 1rem;
            width: fit-content;
            height: 50px;
            font-size: 22px;
            border-radius: 20px;
            margin: 1rem 1rem 0 0;
            font-family: "Do Hyeon", sans-serif;
            background-color: #58419c;
            box-shadow: 1px 1px 2px #7a7979;
            color: #fff;
            &:hover {
              color: #ffcb5e;
              box-shadow: 2px 2px 2px #7a7979;
              cursor: pointer;
            }
          }
        }
      }
      .rightSection {
        display: flex;
        flex-direction: column;
        width: 40%;
      }
    }
  }

  .pageTwo {
    background-color: #ffcb5e;
    .content {
      display: flex;
      flex-direction: column;
      font-family: "Do Hyeon", sans-serif;
      width: 75%;
      .bestItemTitle {
        display: flex;
        /* font-family: "Do Hyeon", sans-serif; */
        flex-direction: column;
        margin-bottom: 2rem;
        h1 {
          color: #58419c;
          font-size: 60px;
          margin-bottom: 1rem;
        }
        p {
          color: #fff;
          font-size: 30px;
          line-height: 40px;
        }
      }
      .bestItemContent {
        display: flex;
        flex-direction: column;
        h2 {
          color: #58419c;
          font-size: 30px;
        }
        .bestItem {
          display: flex;
          margin-top: 1rem;
          .slick-slide div {
            cursor: pointer;
          }
          .slick-prev:before,
          .slick-next:before {
            color: #58419c;
          }
          .bestItemCard {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 10px 10px 5px 5px;
            background-color: #fff;
            max-width: 260px;
            height: 314px;
            .itemRanking {
              display: flex;
              align-items: flex-start;
              min-width: 260px;
              height: 50px;
              padding: 1rem;
              border-radius: 10px 10px 0 0;
              background-color: #58419c;
              h2 {
                color: #ffcb5e;
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
              font-size: 20px;
            }
            .itemPrice {
              margin-bottom: 1rem;
              font-size: 20px;
            }
          }
        }
      }
    }
  }
  .pageThree {
    background-color: #ffcb5e;
    .content {
      display: flex;
      flex-direction: column;
      font-family: "Do Hyeon", sans-serif;
      width: 75%;
      .funcSection:nth-child(1) {
        animation-delay: 1s;
        animation-duration: 3s;
        animation-name: ${slideInAnimation};
      }
      .funcSection:nth-child(2) {
        animation-delay: 1s;
        animation-duration: 4s;
        animation-name: ${slideInAnimation};
      }
      .funcSection:nth-child(3) {
        animation-delay: 1s;
        animation-duration: 5s;
        animation-name: ${slideInAnimation};
      }
      .funcSection {
        display: flex;
        flex-direction: column;
        margin-bottom: 3rem;
        .title {
          display: flex;
          align-items: center;
          h1 {
            display: flex;
            color: #58419c;
            font-size: 60px;
            /* margin-bottom: 1rem; */
          }
          div {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 75px;
            height: 75px;
            border-radius: 50%;
            /* background-color: #58419c; */
            color: #58419c;
          }
        }
        p {
          color: #fff;
          font-size: 30px;
          line-height: 40px;
        }
      }
    }
  }
  .pageFour {
    background-color: #ffcb5e;
    .content {
      display: flex;
      flex-direction: column;
      font-family: "Do Hyeon", sans-serif;
      width: 75%;
      .funcSection {
        display: flex;
        /* font-family: "Do Hyeon", sans-serif; */
        flex-direction: column;
        margin-bottom: 2rem;
        h1 {
          color: #58419c;
          font-size: 60px;
          margin-bottom: 1rem;
        }
        p {
          color: #fff;
          font-size: 30px;
          line-height: 40px;
        }
      }
    }
  }
`;

const HomePage = () => {
  const outerDivRef = useRef<any>();
  const [scrollIndex, setScrollIndex] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const wheelHandler = (e: React.WheelEvent<HTMLElement>) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같음

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        } else {
          outerDivRef.current.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else {
          // 현재 4페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  return (
    <HomeMain>
      <section ref={outerDivRef} className="outer">
        <Dots scrollIndex={scrollIndex} />
        <section className="inner pageOne">
          <HomeHeader />
          <section className="content">
            <section className="leftSection">
              <section className="icon">
                <SiHomeassistantcommunitystore size={150} />
              </section>
              <h1>편의점 PB상품을 한 곳에서</h1>
              <p>
                CU, GS25, 7ELEVEN 3사 편의점 PB상품의 제품 평점부터 리뷰까지 한
                곳에서 볼 수 있는 서비스를 제공합니다
              </p>
              <section className="buttonSection">
                <button onClick={() => navigate("/itemList")}>
                  바로 시작하기
                </button>
                <button onClick={() => navigate("/login")}>로그인하기</button>
              </section>
            </section>
            <section className="rightSection"></section>
          </section>
        </section>
        <section className="inner pageTwo">
          <section className="content">
            <section className="bestItemTitle">
              <h1>베스트 상품</h1>
              <p>한 주간 가장 평점이 높은 상품을 소개합니다</p>
            </section>
            <section className="bestItemContent">
              <h2>주간 Best 10</h2>
              <section className="bestItem">
                <Carousel />
              </section>
            </section>
          </section>
        </section>
        <section className="inner pageThree">
          <section className="content">
            <section className="funcSection">
              <section className="title">
                <h1>댓글 작성</h1>
                <div>
                  <FaPencilAlt size={50} />
                </div>
              </section>
              <p>상품에 대한 리뷰를 작성할 수 있습니다</p>
            </section>
            <section className="funcSection">
              <section className="title">
                <h1>별점 추천</h1>
                <div>
                  <RiMailStarFill size={50} />
                </div>
              </section>
              <p>상품에 대한 추천도를 별점으로 확인할 수 있습니다</p>
            </section>
            <section className="funcSection">
              <section className="title">
                <h1>상품 찜하기</h1>
                <div>
                  <BsFillBookmarkHeartFill size={50} />
                </div>
              </section>
              <p>
                마음에 드는 상품을 찜하면 마이페이지에서 자신의 찜 목록을 확인할
                수 있습니다
              </p>
            </section>
          </section>
        </section>
        <section className="inner pageFour">지도!</section>
      </section>
    </HomeMain>
  );
};

export default HomePage;
