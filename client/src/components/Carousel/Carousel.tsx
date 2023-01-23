import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import useFetch from "../../api/useFetch";

const StyledSlider = styled(Slider)`
  display: flex;
  height: 314px;
  width: 840px;
  /* justify-content: center; */
  .slick-slide div {
    cursor: pointer;
  }
  .slick-prev:before,
  .slick-next:before {
    color: #58419c;
  }
`;

interface BestItemProps {
  top: number;
  name: string;
  price: number;
  image: string;
  id: string;
  onClick?: () => void;
}

const BestItemCard = ({
  id,
  top,
  name,
  price,
  image,
  onClick,
}: BestItemProps) => {
  return (
    <div className="bestItemCard" onClick={onClick} key={id}>
      <div className="itemRanking">
        <h2>Top{top + 1}</h2>
      </div>
      <img src={image} alt={top.toString()} />
      <span className="itemName">{name}</span>
      <span className="itemPrice">{price}원</span>
    </div>
  );
};

const Carousel = () => {
  const navigate = useNavigate();
  const { data } = useFetch("/getFavorites");
  const [bestItems, setBestItems] = useState<any>(null);

  useEffect(() => {
    if (data) {
      setBestItems(data);
    }
  }, [data]);

  console.log(bestItems);

  const settings = {
    arrows: true,
    autoplay: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <section className="page-carousel">
      {bestItems && (
        <StyledSlider {...settings}>
          {bestItems.map((item: any, idx: number) => {
            return (
              <BestItemCard
                id={item.productId}
                top={idx}
                name={item.productName}
                price={item.price}
                image={item.imgUrl}
                onClick={() => navigate("/itemList/:itemId")}
              />
            );
          })}
        </StyledSlider>
      )}
    </section>
  );
};

export default Carousel;
