import styled, { keyframes } from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import HomeHeader from "../../components/AdminHeader/AdminHeader";
import { FaPencilAlt, FaMapMarkerAlt, FaCrown } from "react-icons/fa";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { RiMailStarFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import { slideInRight } from "react-animations";
import Map from "../../components/Map/Map";
import { FcShop } from "react-icons/fc";
import { FiArrowUp } from "react-icons/fi";

const slideInAnimation = keyframes`${slideInRight}`;

const HomeMain = styled.main`
  font-family: "Do Hyeon", sans-serif;
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
    .content {
      display: flex;
      flex-direction: column;
      width: 75%;
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
        max-width: 750px;
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
          margin: 2rem 1rem 0 0;
          font-family: "Do Hyeon", sans-serif;
          background-color: #58419c;
          box-shadow: 1px 1px 2px #7a7979;
          color: #fff;
          &:hover {
            color: #ffcb5e;
            box-shadow: 2px 2px 2px #7a7979;
            transition: 0.3s;
            cursor: pointer;
          }
        }
      }
    }
  }

  .pageTwo {
    background-color: #ffcb5e;
    .content {
      display: flex;
      flex-direction: column;
      width: 75%;
      .bestItemTitle {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        .title {
          display: flex;
          align-items: center;
          h1 {
            display: flex;
            color: #58419c;
            font-size: 60px;
          }
          div {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 75px;
            height: 75px;
            border-radius: 50%;
            color: #58419c;
          }
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
          .bestItemCard {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            border-radius: 10px 10px 5px 5px;
            background-color: #fff;
            max-width: 260px;
            height: 314px;
            margin-right: 0.5rem;
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
              width: 140px;
              height: 140px;
            }
            .itemName {
              /* margin-bottom: 0.5rem; */
              font-weight: 600;
              font-size: 18px;
            }
            .itemPrice {
              margin-bottom: 1rem;
              font-size: 18px;
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
      width: 75%;
      .funcSection:nth-child(1) {
        animation-duration: 3s;
        margin-bottom: 4rem;
      }
      .funcSection:nth-child(2) {
        animation-duration: 4s;
        margin-bottom: 4rem;
      }
      .funcSection:nth-child(3) {
        animation-duration: 5s;
      }
      .funcSection {
        display: flex;
        flex-direction: column;
        animation-delay: 1s;
        animation-name: ${slideInAnimation};
        .title {
          display: flex;
          align-items: center;
          h1 {
            display: flex;
            color: #58419c;
            font-size: 60px;
          }
          div {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 75px;
            height: 75px;
            border-radius: 50%;
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
      width: 75%;
      .funcSection {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        .title {
          display: flex;
          align-items: center;
          h1 {
            display: flex;
            color: #58419c;
            font-size: 60px;
          }
          div {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 75px;
            height: 75px;
            border-radius: 50%;
            color: #58419c;
          }
        }
        p {
          color: #fff;
          font-size: 30px;
          line-height: 40px;
        }
      }
      .mapSection {
        display: flex;
        div {
          display: flex;
          flex-direction: column;
          margin-right: 1rem;
          h2 {
            display: flex;
            justify-content: center;
            padding: 0.5rem 0;
            font-size: 24px;
            color: #ffcb5e;
            background-color: #58419c;
            border-radius: 10px;
            margin: 0 1rem 1rem 0;
          }
        }
      }
    }
  }
  .fixedbtnSection {
    display: flex;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      background-color: #58419c;
      color: #fff;
      &:hover {
        color: #ffcb5e;
        box-shadow: 1px 1px 2px #7a7979;
        transition: 0.3s;
        cursor: pointer;
      }
      // 위로가기 버튼
      &:nth-child(1) {
        position: fixed;
        top: 90%;
        right: 50px;
        border-radius: 50%;
        width: 35px;
        height: 35px;
      }
      // 로그인 버튼
      &:nth-child(2),
      &:nth-child(3) {
        position: fixed;
        font-family: "Do Hyeon", sans-serif;
        font-size: 13px;
        top: 15%;
        right: 50px;
        padding: 0.5rem 1rem;
        border-radius: 10px;
      }
      // 바로가기 버튼
      &:nth-child(3) {
        right: 120px;
      }
    }
  }
`;

const DotsDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 90%;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20px;
    height: 100px;
  }
`;

const DotDiv = styled.div<{ isSame: boolean }>`
  width: 12px;
  height: 12px;
  border: 1px solid #58419c;
  background-color: ${(props) => (props.isSame ? "#58419c" : "transparent")};
  border-radius: 50%;
  transition-duration: 1000ms;
  &:hover {
    background-color: #58419c;
  }
`;

interface DotProps {
  num: number;
  scrollIndex: number;
}

const HomePage = () => {
  const outerDivRef = useRef<HTMLElement>(null);
  const [scrollIndex, setScrollIndex] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const outerDivRefCurrent = outerDivRef.current;
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRefCurrent as HTMLElement; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같음

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          outerDivRefCurrent?.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerDivRefCurrent?.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          outerDivRefCurrent?.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        } else {
          // 현재 4페이지
          outerDivRefCurrent?.scrollTo({
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
          outerDivRefCurrent?.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerDivRefCurrent?.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          outerDivRefCurrent?.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else {
          // 현재 4페이지
          outerDivRefCurrent?.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      }
    };
    outerDivRefCurrent?.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent?.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  // 홈페이지 우측 풀페이지를 위한 dot
  const Dot = ({ num, scrollIndex }: DotProps) => {
    let isSame = scrollIndex === num ? true : false;
    const page = (num || 0) - 1;
    const handleClick = () => {
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같음
      outerDivRef.current?.scrollTo({
        top: pageHeight * page,
        left: 0,
        behavior: "smooth",
      });
      setScrollIndex(num || 0);
    };
    return <DotDiv isSame={isSame} onClick={handleClick}></DotDiv>;
  };

  const handleScrollTopBtnClick = () => {
    outerDivRef.current?.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <HomeMain>
      <section ref={outerDivRef} className="outer">
        <DotsDiv>
          <div className="container">
            <Dot num={1} scrollIndex={scrollIndex}></Dot>
            <Dot num={2} scrollIndex={scrollIndex}></Dot>
            <Dot num={3} scrollIndex={scrollIndex}></Dot>
            <Dot num={4} scrollIndex={scrollIndex}></Dot>
          </div>
        </DotsDiv>
        <section className="inner pageOne">
          <HomeHeader />
          <section className="content">
            <section className="icon">
              <FcShop size={200} />
            </section>
            <h1>편의점 PB상품을 한 곳에서</h1>
            <p>
              CU, GS25, 7ELEVEN 3사 편의점 PB상품의 제품 평점부터 리뷰까지 한
              곳에서 볼 수 있는 서비스를 제공합니다
            </p>
            <section className="buttonSection">
              <button onClick={() => navigate("/cu")}>바로 시작하기</button>
              <button onClick={() => navigate("/login")}>로그인하기</button>
            </section>
          </section>
        </section>
        <section className="inner pageTwo">
          <section className="content">
            <section className="bestItemTitle">
              <section className="title">
                <h1>베스트 상품</h1>
                <div>
                  <FaCrown size={50} />
                </div>
              </section>
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
        <section className="inner pageFour">
          <section className="content">
            <section className="funcSection">
              <section className="title">
                <h1>편의점 위치</h1>
                <div>
                  <FaMapMarkerAlt size={50} />
                </div>
              </section>
              <p>지도 기능을 통해 가까운 편의점 위치를 제공합니다</p>
            </section>
            <section className="mapSection">
              <div>
                <h2>CU</h2>
                <Map id="mapCu" content="CU" />
              </div>
              <div>
                <h2>GS25</h2>
                <Map id="mapGs" content="GS" />
              </div>
              <div>
                <h2>7-ELEVEN</h2>
                <Map id="map7Eleven" content="세븐일레븐" />
              </div>
            </section>
          </section>
        </section>
        <section className="fixedbtnSection">
          <button className="scrollTopBtn" onClick={handleScrollTopBtnClick}>
            <FiArrowUp size={35} />
          </button>
          <button className="scrollTopBtn" onClick={() => navigate("/login")}>
            로그인
          </button>
          <button className="scrollTopBtn" onClick={() => navigate("/cu")}>
            PB상품
          </button>
        </section>
      </section>
    </HomeMain>
  );
};

export default HomePage;
