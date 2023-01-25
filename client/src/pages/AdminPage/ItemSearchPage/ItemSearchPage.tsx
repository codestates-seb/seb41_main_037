import React, { useEffect, useState } from "react";
import AdminNav from "../../../components/AdminNav/AdminNav";
import styled from "styled-components";
import HomeHeader from "../../../components/AdminHeader/AdminHeader";
import { BsTrashFill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { FcSearch } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../api/useFetch";
import axios from "axios";

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const ItemSearchPageMain = styled.main`
  font-family: "Do Hyeon", sans-serif;
  margin: 100px 0 0 100px;
  .itemSearch {
    width: 700px;
    .adminTitle {
      display: flex;
      justify-content: flex-start;
      font-size: 24px;
      margin-bottom: 1rem;
    }
  }
  .searchBarSection {
    display: flex;
    align-items: center;
    width: 700px;
    height: 40px;
    margin-bottom: 1rem;
    color: #383838;
    background-color: #f5f5f5;
    box-shadow: 3px 3px 3px #979595;
    border-radius: 30px;
    padding: 0.5rem 1rem 0.5rem 1.5rem;
    &:focus-within {
      box-shadow: 3px 3px 3px #7a7979;
    }
    input {
      display: flex;
      font-family: "Do Hyeon", sans-serif;
      width: 635px;
      height: 30px;
      font-size: 15px;
      background-color: #f5f5f5;
      border: none;
      &::placeholder {
        color: #979595;
      }
      &:focus-within {
        outline: none !important;
      }
    }
    .search.icon {
      display: flex;
      color: #58419c;
    }
  }
  .menuTab {
    display: flex;
    align-items: center;
    list-style: none;
    background-color: #f5f5f5;
    color: #979595;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    cursor: pointer;
    > li {
      display: flex;
      width: 200px;
      height: 50px;
      justify-content: center;
      align-items: center;
      text-align: center;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
  }
  .active {
    background-color: #d9d9d9;
    color: black;
  }
  .itemListSection {
    width: 700px;
    max-height: 500px;
    background-color: #d9d9d9;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
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
    .item {
      display: flex;
      border-radius: 3px;
      align-items: center;
      margin: 1rem;
      padding: 0.5rem;
      justify-content: space-between;
      background-color: white;
      box-shadow: inset 1px 1px 2px #7a7979;
      p {
        font-size: 15px;
        line-height: 20px;
        width: 95%;
      }
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 5%;
        width: 20px;
        height: 20px;
        margin: 3px;
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

const ItemSearchPage = () => {
  const navigate = useNavigate();
  const [currentTab, clickTab] = useState(0);
  const { data } = useFetch("/products?page=1&size=30");
  const [products, setProducts] = useState<any>(null);
  useEffect(() => {
    if (data) {
      setProducts(data.data);
    }
  }, [data]);

  // console.log(products);

  const menuArr = [
    { name: "전체" },
    { name: "CU" },
    { name: "GS25" },
    { name: "7-ELEVEN" },
  ];

  const selectHandler = (index: number) => {
    clickTab(index);
    if (products) {
      if (index === 1) {
        setProducts(
          data.data.filter((item: any) => item.productCategory === "CU")
        );
      } else if (index === 2) {
        setProducts(
          data.data.filter((item: any) => item.productCategory === "GS")
        );
      } else if (index === 3) {
        setProducts(
          data.data.filter((item: any) => item.productCategory === "SEVEN")
        );
      } else {
        setProducts(data.data);
      }
    }
  };

  const deleteProduct = (id: number) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      console.log(id);
      if (products) {
        axios
          .delete(
            `http://ec2-13-124-162-199.ap-northeast-2.compute.amazonaws.com:8080/admin/${id}`
          )
          .catch((err) => console.log(err));
        setProducts(products.filter((item: any) => item.productId !== id));
      }
      alert("삭제되었습니다.");
    } else {
      alert("취소합니다.");
    }
  };

  return (
    <>
      <Main>
        <HomeHeader />
        <AdminNav />
        <ItemSearchPageMain>
          <section className="itemSearch">
            <section className="adminTitle">
              <h2>상품검색</h2>
            </section>
            <section className="searchBarSection">
              <input type="text" placeholder="상품명을 입력하세요." />
              <FcSearch className="search icon" size={25} />
            </section>
            <section>
              <ul className="menuTab">
                {menuArr.map((el, index) => (
                  <li
                    className={
                      index === currentTab ? "menuTab active" : "menuTab"
                    }
                    onClick={() => selectHandler(index)}
                  >
                    {el.name}
                  </li>
                ))}
              </ul>
            </section>
          </section>
          <section className="itemListSection">
            {products &&
              products.map((item: any) => (
                <section className="item" key={item.productId}>
                  <p>{item.productName}</p>
                  <div className="icon">
                    <BiEdit
                      size={12}
                      onClick={() =>
                        navigate(`/admin/update/${item.productId}`)
                      }
                    />
                  </div>
                  <div className="icon">
                    <BsTrashFill
                      size={12}
                      onClick={() => deleteProduct(item.productId)}
                    />
                  </div>
                </section>
              ))}
          </section>
        </ItemSearchPageMain>
      </Main>
    </>
  );
};

export default ItemSearchPage;
