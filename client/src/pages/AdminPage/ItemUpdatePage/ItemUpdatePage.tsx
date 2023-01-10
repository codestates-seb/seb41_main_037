// import React from "react";
import React, { useMemo, useRef, useState } from "react";
import styled from "styled-components";
import HomeHeader from "../../../components/AdminHeader/AdminHeader";

const ItemUpdatePageMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
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

interface UploadImage {
  file: File;
  thumbnail: string;
  type: string;
}

const ItemUpdatePage = () => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<UploadImage | null>(null);

  const handleClinkFileInput = () => {
    fileInput.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);

      setImageFile({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      });
    }
  };

  const showImage = useMemo(() => {
    if (!imageFile && imageFile === null) {
      return (
        <section>
          <img
            src="https://tqklhszfkvzk6518638.cdn.ntruss.com/product/8801728106584.jpg"
            alt="비어있는 프로필"
          />
        </section>
      );
    }
    return (
      <img
        src={imageFile.thumbnail}
        alt={imageFile.type}
        onClick={handleClinkFileInput}
      />
    );
  }, [imageFile]);

  const handleCreate = () => {
    console.log(imageFile);
  };

  const [name, setName] = useState("HEYROO버터스틱쿠키");
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const [price, setPrice] = useState("2000");
  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  return (
    <>
      <HomeHeader />
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
                value={name}
                placeholder="수정할 상품명을 입력하세요"
                onChange={handleName}
              />
            </section>
            <section>
              <div>가격</div>
              <input
                type="text"
                value={price}
                placeholder="수정할 상품의 가격을 입력하세요"
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
    </>
  );
};

export default ItemUpdatePage;
