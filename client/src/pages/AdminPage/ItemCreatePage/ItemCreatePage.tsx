// import React from "react";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import HomeHeader from "../../../components/AdminHeader/AdminHeader";
import AdminNav from "../../../components/AdminNav/AdminNav";
import axios from "axios";

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const ItemCreatePageMain = styled.main`
  font-family: "Do Hyeon", sans-serif;
  margin-top: 100px;
  margin-left: 100px;
  .itemCreate {
    width: 700px;
    .adminTitle {
      display: flex;
      justify-content: flex-start;
      font-size: 24px;
      margin-bottom: 1rem;
    }
    .adminItem {
      display: flex;
      flex-direction: column;
      section:nth-child(1) {
        display: flex;
        margin-bottom: 1rem;
        align-items: center;
        border: 1px solid #7a7979;
        border-radius: 5px;
        height: 50px;
        &:focus-within {
          box-shadow: 2px 2px 5px #979595;
        }
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100px;
          height: 50px;
          color: #fff;
          background-color: #7a7979;
          border-radius: 5px 0 0 5px;
        }
        label {
          display: flex;
          align-items: center;
          margin: 0 2rem 0 1rem;
          input {
            font-family: "Do Hyeon", sans-serif;
            font-size: 15px;
            margin: 0.5rem;
            border: none;
            &:focus-within {
              outline: none;
            }
          }
        }
      }
      section:nth-child(2),
      section:nth-child(3) {
        display: flex;
        margin-bottom: 1rem;
        align-items: center;
        border: 1px solid #7a7979;
        border-radius: 5px;
        height: 50px;
        &:focus-within {
          box-shadow: 2px 2px 5px #979595;
        }
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100px;
          height: 50px;
          color: #fff;
          background-color: #7a7979;
          border-radius: 5px 0 0 5px;
        }
        input {
          font-family: "Do Hyeon", sans-serif;
          font-size: 15px;
          margin-left: 1rem;
          width: 80%;
          border: none;
          &:focus-within {
            outline: none;
          }
        }
      }
      section:nth-child(4) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 1rem;
        border: 1px solid #7a7979;
        border-radius: 5px;
        justify-content: space-between;
        &:focus-within {
          box-shadow: 2px 2px 5px #979595;
        }
        div {
          display: flex;
          align-items: center;
          padding-left: 1rem;
          width: 100%;
          height: 50px;
          color: #fff;
          background-color: #7a7979;
          border-radius: 2px 2px 0 0;
        }
        section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          border: none;
          height: fit-content;
          img {
            width: 200px;
            height: 200px;
          }
        }

        button {
          font-family: "Do Hyeon", sans-serif;
          border: none;
          color: #fff;
          height: 30px;
          background-color: #7a7979;
          border-radius: 0 0 2px 2px;
          &:hover {
            filter: brightness(1.2);
            transition: 0.3s;
          }
        }
      }
    }
    .adminButton {
      display: flex;
      justify-content: flex-end;
      button {
        font-family: "Do Hyeon", sans-serif;
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

const ItemCreatePage = () => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState(
    "https://cdn-icons-png.flaticon.com/512/5578/5578817.png"
  );
  // 선택된 편의점 이름을 담는 변수
  const [selectedStore, setSelectedStore] = useState("");
  const [price, setPrice] = useState("");
  const [productName, setProductName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleClinkFileInput = () => {
    fileInput.current?.click();
  };

  const handleStoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedStore(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };

  const handleCreate = () => {
    if (selectedStore && productName && price && image) {
      axios
        .post(
          "http://ec2-13-124-162-199.ap-northeast-2.compute.amazonaws.com:8080/admin",
          {
            productName: productName,
            price: Number(price),
            imgName: "img",
            imgUrl: image,
            productCategory: selectedStore,
          }
        )
        .catch((err) => console.log(err));
      alert("상품이 등록되었습니다");
    }
  };

  return (
    <>
      <HomeHeader />
      <Main>
        <AdminNav />
        <ItemCreatePageMain>
          <section className="itemCreate">
            <section className="adminTitle">
              <h2>상품등록</h2>
            </section>
            <section className="adminItem">
              <section>
                <div>편의점</div>
                <label>
                  <input
                    type="radio"
                    name="cvs"
                    value="CU"
                    onChange={handleStoreChange}
                  />
                  CU
                </label>
                <label>
                  <input
                    type="radio"
                    name="cvs"
                    value="GS"
                    onChange={handleStoreChange}
                  />
                  GS25
                </label>
                <label>
                  <input
                    type="radio"
                    name="cvs"
                    value="SEVEN"
                    onChange={handleStoreChange}
                  />
                  7-ELEVEN
                </label>
              </section>
              <section>
                <div>상품명</div>
                <input
                  type="text"
                  placeholder="상품명을 입력하세요"
                  onChange={handleProductNameChange}
                />
              </section>
              <section>
                <div>가격</div>
                <input
                  type="text"
                  placeholder="가격을 입력하세요(숫자만 입력)"
                  onChange={handlePriceChange}
                />
              </section>

              <section>
                <div>상품이미지</div>
                <input
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                  ref={fileInput}
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
                <section>
                  <img
                    src={image}
                    alt="userImg"
                    onClick={handleClinkFileInput}
                  />
                </section>
                <button onClick={handleClinkFileInput}>파일 업로드</button>
              </section>
            </section>
            <section className="adminButton">
              <button onClick={handleCreate}>등록하기</button>
            </section>
          </section>
        </ItemCreatePageMain>
      </Main>
    </>
  );
};

export default ItemCreatePage;
