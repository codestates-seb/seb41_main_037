import React, { useState, useEffect, KeyboardEvent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RxMagnifyingGlass } from "react-icons/rx";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import useFetch from "../../api/useFetch";

const Container = styled.main`
  display: flex;
  width: 100%;
  margin-bottom: 100px;

  .mainContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
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

  .searchBar {
    position: relative;
    margin-bottom: 50px;

    input {
      width: 500px;
      height: 50px;
      padding: 0.5rem 0 0.5rem 3rem;
      background-color: #f5f5f5;
      border: none;
      border-radius: 30px;
      font-size: 15px;

      &:focus {
        outline-color: #58419c;
      }
    }
    .searchIcon {
      position: absolute;
      width: 30px;
      height: 50px;
      right: 15px;
      color: #58419c;
      font-size: 30px;
    }
  }

  .contentContainer {
    display: flex;
    justify-content: right;
    flex-wrap: wrap;

    .sortBtnGroup {
      display: flex;
      margin-right: 150px;
      margin-bottom: 50px;

      .sortBtn {
        vertical-align: middle;
        width: 50px;
        height: 50px;
        margin: 10px;
        padding: 5px;
        background-color: white;
        color: #58419c;
        border: solid 2px;
        border-color: #58419c;
        border-radius: 50px;
        font-size: 12px;
        font-weight: 600;
        font-family: "Do Hyeon", sans-serif;
        &:hover {
          background-color: #58419c;
          color: white;
        }
        &:focus {
          background-color: #58419c;
          color: white;
        }
      }
    }

    .itemList {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      margin-bottom: 50px;

      .itemBox {
        position: relative;
        flex-direction: column;
        width: 250px;
        height: 290px;
        margin: 20px;
        padding: 20px;
        outline: solid 3px;
        outline-color: #f5f5f5;
        border-radius: 20px;
        -ms-user-select: none;
        -moz-user-select: -moz-none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        font-family: "Do Hyeon", sans-serif;
        &:hover {
          outline: solid 5px;
          outline-color: #ffcb5e;
          border-radius: 20px;
        }

        .itemImg {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 200px;
          height: 200px;
          margin: 0 auto;
          margin-bottom: 10px;
          > img {
            width: 200px;
            height: 200px;
          }
        }

        .itemInfo {
          flex-direction: column;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;

          .itemName {
            margin-bottom: 10px;
            font-size: 17px;
            font-weight: 600;
          }

          .itemPrice {
            margin-bottom: 20px;
            font-size: 20px;
            font-weight: 800;
          }
        }

        .itemLike {
          position: absolute;
          right: 15px;
          color: #58419c;
          font-size: 25px;
        }
      }
    }
  }
  .pageBtnGroup {
    display: flex;
    .pageBtn {
      display: flex;
      background-color: white;
      color: #58419c;
      border: none;
      font-size: 17px;
    }
  }
`;

interface ItemProps {
  id: number;
  img: string;
  name: string;
  price: number;
  convertPrice: void;
}

const Item = ({ id, img, name, price }: ItemProps) => {
  const [like, setLike] = useState(false);
  const convertPrice = (price: any) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="itemBox">
      <span
        className="itemLike"
        onClick={() => {
          setLike(!like);
        }}>
        {like ? <HiHeart /> : <HiOutlineHeart />}
      </span>
      <Link to={`/products/${id}`}>
        <div className="itemImg">
          <img src={img} alt="itemImg"></img>
        </div>
        <div className="itemInfo">
          <div className="itemName">{name}</div>
          <div className="itemPrice">{convertPrice(price)}원</div>
        </div>
      </Link>
    </div>
  );
};

const CuMainPage = () => {
  const { data } = useFetch("/products?page=1&size=24");
  const [products, setProducts] = useState<any>(null);

  useEffect(() => {
    if (data) {
      setProducts(
        data.data.filter((item: any) => item.productCategory === "CU")
      );
    }
  }, [data]);

  console.log(products);

  const [word, setWord] = useState<string>("");
  const onSubmit = async () => {
    // window.location.href = "/search?key=" + word + "&category=CU";
    window.history.pushState("", word, "/search?key=" + word + "&category=CU");
    setProducts(
      products.filter((item: any) =>
        item.productName.toUpperCase().includes(word.toUpperCase())
      )
    );
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const sortProduct = (type: any) => {
    const newProduct = [...products];
    if (type === "like") {
      newProduct.sort(
        (a: { rating: number }, b: { rating: number }) => b.rating - a.rating
      );
      setProducts(newProduct);
    } else if (type === "price") {
      newProduct.sort(
        (a: { price: number }, b: { price: number }) => b.price - a.price
      );
      setProducts(newProduct);
    } else if (type === "review") {
      newProduct.sort(
        (a: { reviewCount: number }, b: { reviewCount: number }) =>
          b.reviewCount - a.reviewCount
      );
      setProducts(newProduct);
    }
  };

  return (
    products && (
      <>
        <Container>
          <Nav />
          <section className="mainContainer">
            <section className="headerContainer">
              <header>
                <Link to="/">
                  <img
                    className="cvsLogo"
                    src="/img/cvs logo.png"
                    alt="logoImg"></img>
                </Link>
              </header>
              <div className="searchBar">
                <input
                  type="text"
                  maxLength={30}
                  onChange={(e) => {
                    setWord(e.target.value);
                    console.log(word);
                  }}
                  onKeyPress={handleKeyPress}
                />
                <RxMagnifyingGlass
                  className="searchIcon"
                  type="button"
                  onClick={() => {
                    onSubmit();
                  }}
                />
              </div>
            </section>
            <section className="contentContainer">
              <div className="sortBtnGroup">
                <button
                  className="sortBtn"
                  onClick={() => {
                    sortProduct("like");
                  }}>
                  찜
                  <br />
                  많은순
                </button>
                <button
                  className="sortBtn"
                  onClick={() => {
                    sortProduct("price");
                  }}>
                  가격
                  <br />
                  높은순
                </button>
                <button
                  className="sortBtn"
                  onClick={() => {
                    sortProduct("review");
                  }}>
                  리뷰
                  <br />
                  많은순
                </button>
              </div>
              <li className="itemList">
                {products.map((item: any) => (
                  <Item
                    id={item.productId}
                    img={item.imgUrl}
                    name={item.productName}
                    price={item.price}
                    convertPrice={item.price}
                  />
                ))}
              </li>
            </section>
            <div className="pageBtnGroup">
              <button className="pageBtn">
                <IoMdArrowDropleft />
              </button>
              <button className="pageBtn">1</button>
              <button className="pageBtn">2</button>
              <button className="pageBtn">3</button>
              <button className="pageBtn">4</button>
              <button className="pageBtn">5</button>
              <button className="pageBtn">
                <IoMdArrowDropright />
              </button>
            </div>
          </section>
        </Container>
        <Footer />
      </>
    )
  );
};

export default CuMainPage;
