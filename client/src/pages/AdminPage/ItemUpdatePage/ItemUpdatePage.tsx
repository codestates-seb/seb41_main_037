import React, { useMemo, useRef, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../../../api/useFetch";
import HomeHeader from "../../../components/AdminHeader/AdminHeader";
import AdminNav from "../../../components/AdminNav/AdminNav";

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 90%;
`;

const ItemUpdatePageMain = styled.main`
  font-family: "Do Hyeon", sans-serif;
  margin: 50px 0 0 100px;
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
      section:nth-child(1),
      section:nth-child(2) {
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
      section:nth-child(3) {
        display: flex;
        flex-direction: column;
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
          align-items: center;
          justify-content: center;
          border: none;
          p {
            margin-top: 1rem;
          }
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

const ItemUpdatePage = () => {
  const { productId } = useParams();
  const { data } = useFetch(`/products/${productId}`);
  const [product, setProduct] = useState<any>(null);

  const fileInput = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<any>(null);

  const [name, setName] = useState<any>(null);
  const [price, setPrice] = useState<any>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setProduct(data.data);
      setName(data.data.productName);
      setPrice(data.data.price);
    }
  }, [data]);

  const handleClinkFileInput = () => {
    fileInput.current?.click();
  };

  const reader = new FileReader();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // setImageFile(URL.createObjectURL(e.target.files[0]));
      reader.onload = function (e) {
        console.log(typeof e.target?.result);
        if (typeof e.target?.result === "string") {
          setImageFile(e.target.result);
          console.log(e.target.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const showImage = useMemo(() => {
    if (!imageFile && imageFile === null) {
      return (
        <section>
          <img src={product && product.imgUrl} alt="비어있는 프로필" />
        </section>
      );
    }
    return <img src={imageFile} alt="img" onClick={handleClinkFileInput} />;
  }, [imageFile, product]);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleCreate = () => {
    axios
      .patch(
        `http://ec2-13-124-162-199.ap-northeast-2.compute.amazonaws.com:8080/admin/${productId}`,
        {
          imgName: "img",
          imgUrl: imageFile ? imageFile : product.imgUrl,
          price: Number(price),
          productName: name,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        alert("상품 수정이 완료되었습니다");
        navigate("/admin/search");
      })
      .catch((err) => alert("상품 수정에 실패했습니다"));
    console.log(imageFile);
  };

  return (
    <>
      <HomeHeader />
      <Main>
        <AdminNav />
        <ItemUpdatePageMain>
          <section className="itemCreate">
            <section className="adminTitle">
              <h2>상품수정</h2>
            </section>
            <section className="adminItem">
              <section>
                <div>상품명</div>
                <input
                  type="text"
                  value={name || ""}
                  placeholder="수정할 상품명을 입력하세요"
                  onChange={handleName}
                />
              </section>
              <section>
                <div>가격</div>
                <input
                  type="text"
                  value={price || ""}
                  placeholder="수정할 상품의 가격을 입력하세요(숫자만 입력)"
                  onChange={handlePrice}
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
                {showImage}
                <button onClick={handleClinkFileInput}>파일 업로드</button>
              </section>
            </section>
            <section className="adminButton">
              <button onClick={handleCreate}>수정하기</button>
            </section>
          </section>
        </ItemUpdatePageMain>
      </Main>
    </>
  );
};

export default ItemUpdatePage;
