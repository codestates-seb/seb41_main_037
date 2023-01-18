import styled from "styled-components";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const StyledSlider = styled(Slider)`
  display: flex;
  height: 320px;
  width: 840px;
  justify-content: center;
  .slick-slide div {
    cursor: pointer;
  }
  .slick-prev:before,
  .slick-next:before {
    color: #58419c;
  }
  .slick-dots {
    bottom: -60px;
    margin-right: 18px;
  }
  .slick-dots li button:before {
    line-height: 0px;
    color: #58419c;
  }
  .slick-dots li.slick-active button:before {
    color: #58419c;
  }
`;

interface BestItemProps {
  top: string;
  name: string;
  price: string;
  image: string;
  onClick?: () => void;
}

const BestItemCard = ({ top, name, price, image, onClick }: BestItemProps) => {
  return (
    <div className="bestItemCard" onClick={onClick}>
      <div className="itemRanking">
        <h2>{top}</h2>
      </div>
      <img src={image} alt={top} />
      <span className="itemName">{name}</span>
      <span className="itemPrice">{price}</span>
    </div>
  );
};

const Carousel = () => {
  const navigate = useNavigate();
  const showMaxCnt = 3;
  const arr = Array.from(new Array(2));
  const settings = {
    rows: 1,
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: arr.length > showMaxCnt,
    speed: 1000,
    slidesToShow: showMaxCnt,
    slidesToScroll: showMaxCnt,
  };
  return (
    <section className="page-carousel">
      <StyledSlider {...settings}>
        <BestItemCard
          top="Top1"
          name="HEYROO매운까르보볶이"
          price="1,500원"
          image="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8801045574486.jpg"
          onClick={() => navigate("/itemList/:itemId")}
        />
        <BestItemCard
          top="Top2"
          name="HEYROO뉴콘치즈그라탕"
          price="5,300원"
          image="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8805684006131.jpg"
          onClick={() => navigate("/itemList/:itemId")}
        />
        <BestItemCard
          top="Top3"
          name="HEYROO바지락칼국수컵"
          price="2,300원"
          image="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8801085069157.jpg"
          onClick={() => navigate("/itemList/:itemId")}
        />
        <BestItemCard
          top="Top4"
          name="HEYROO위글바나나스낵"
          price="1,500원"
          image="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8801728106850.jpg"
          onClick={() => navigate("/itemList/:itemId")}
        />
        <BestItemCard
          top="Top5"
          name="HEYROO오란다스낵N"
          price="1,700원"
          image="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8803173130022.jpg"
          onClick={() => navigate("/itemList/:itemId")}
        />
        <BestItemCard
          top="Top6"
          name="HEYROO작은별딸기스낵N"
          price="1,500원"
          image="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8801728106614.jpg"
          onClick={() => navigate("/itemList/:itemId")}
        />
        <BestItemCard
          top="Top7"
          name="HEYROO단호박샐러드"
          price="2,300원"
          image="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8805684005646.jpg"
          onClick={() => navigate("/itemList/:itemId")}
        />
        <BestItemCard
          top="Top8"
          name="HEYROO고소한치즈팝콘"
          price="1,700원"
          image="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8809027559452.jpg"
          onClick={() => navigate("/itemList/:itemId")}
        />
        <BestItemCard
          top="Top9"
          name="HEYROO파르페딸기"
          price="2,500원"
          image="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8809194495317.jpg"
          onClick={() => navigate("/itemList/:itemId")}
        />
        <BestItemCard
          top="Top10"
          name="HEYROO진한초코칩쿠키"
          price="1,200원"
          image="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8801728105365.jpg"
          onClick={() => navigate("/itemList/:itemId")}
        />
      </StyledSlider>
    </section>
  );
};

export default Carousel;
