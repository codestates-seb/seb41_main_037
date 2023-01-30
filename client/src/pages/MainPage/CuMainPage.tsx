import React, { useState, useEffect, KeyboardEvent } from "react";
import styled from "styled-components";
import { Link, useSearchParams } from "react-router-dom";
import { RxMagnifyingGlass } from "react-icons/rx";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import useFetch from "../../api/useFetch";
import Pagination from "../../components/Pagination/Pagination";
import axios from "axios";
import { useRecoilState } from "recoil";
import { LikeState } from "../../states/LikeState";

const Container = styled.main`
  display: flex;
  margin-bottom: 100px;

  .mainContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    width: 100%;
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
      cursor: pointer;
    }
  }

  .contentContainer {
    display: flex;
    justify-content: right;
    flex-wrap: wrap;
    width: 1300px;

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
        cursor: pointer;
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
          cursor: pointer;
        }
      }
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
  const convertPrice = (price: any) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const memberId = localStorage.getItem("memberID");
  const [like, setLike] = useRecoilState(LikeState(id, memberId));
  const { data } = useFetch(`/members/${localStorage.getItem("memberID")}`);
  const [favorites, setFavorites] = useState<any>(null);
  useEffect(() => {
    if (data) {
      setFavorites(data.favorites);
    }
  }, [data]);

  const handlelikeClick = (id: number) => {
    let includedFavorite = favorites.map(
      (favorite: any) => favorite.productId === id
    );
    if (favorites && includedFavorite[0] && like === false) {
      alert("이미 찜 목록에 있는 상품입니다");
    } else {
      axios
        .get(
          `http://ec2-13-124-162-199.ap-northeast-2.compute.amazonaws.com:8080/favorite/${id}`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then(() => setLike(!like))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="itemBox">
      <span className="itemLike">
        {like ? (
          <HiHeart onClick={() => handlelikeClick(id)} />
        ) : (
          <HiOutlineHeart onClick={() => handlelikeClick(id)} />
        )}
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
  const { data } = useFetch("/products");
  const [products, setProducts] = useState<any>(null);

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const pageNum = searchParams.get("page");

    if (data) {
      // setProducts(
      //   data.data.filter((item: any) => item.productCategory === "CU")
      // );
      if (pageNum) {
        axios
          .get(
            `http://ec2-13-124-162-199.ap-northeast-2.compute.amazonaws.com:8080/products?page=${pageNum}&size=8`
          )
          .then((res) => {
            setProducts(
              res.data.data.filter((item: any) => item.productCategory === "CU")
            );
            //setProducts(res.data.data);
            setPage(res.data.pageInfo.page);
            setTotalPages(res.data.pageInfo.totalPages);
          })
          .catch((err) => console.log(err));
      } else {
        axios
          .get(
            `http://ec2-13-124-162-199.ap-northeast-2.compute.amazonaws.com:8080/products?page=1&size=8`
          )
          .then((res) => {
            setProducts(
              res.data.data.filter((item: any) => item.productCategory === "CU")
            );
            //setProducts(res.data.data);
            setPage(res.data.pageInfo.page);
            setTotalPages(res.data.pageInfo.totalPages);
          })
          .catch((err) => console.log(err));
      }
    }
  }, [data, searchParams]);

  const [word, setWord] = useState<string>("");

  const handleSearchClick = async () => {
    window.history.pushState("", word, "/cu/search?key=" + word);
    axios
      .get(
        `http://ec2-13-124-162-199.ap-northeast-2.compute.amazonaws.com:8080/products/search?key=${word}&category=CU`
      )
      .then((res) => {
        setProducts(
          products.filter((item: any) =>
            item.productName.toUpperCase().includes(word.toUpperCase())
          )
        );
      })
      .catch((err) => console.log(err));
  };

  const handleProductName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  const searchKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchClick();
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
                  onChange={handleProductName}
                  onKeyPress={searchKeyPress}
                />
                <RxMagnifyingGlass
                  className="searchIcon"
                  type="button"
                  onClick={() => {
                    handleSearchClick();
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
              <Pagination page={page} totalPages={totalPages} />
            </div>
          </section>
        </Container>
        <Footer />
      </>
    )
  );
};

export default CuMainPage;
