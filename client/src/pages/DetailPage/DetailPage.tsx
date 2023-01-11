import React from "react";
import styled from "styled-components"
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

// 전체화면
const Wrap = styled.div`
  display: flex;
  // flex-direction: column;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // height: 100vh;
  margin-top: 200px;
  //background-color: yellow;
  // width: 100vm;
`;

// 전체화면 가운데 틀
const WrapCenter = styled.div`
  // display: table;
  width: 980px;
  // margin: 0 auto;
  // height: 100%;
  //background-color: blue;
  flex-direction: row;
`;

// 아이템컨테이너 -> 노란창
const ItemContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  margin-top: 200px;
  height: 500px;
  border-radius: 2rem;
  background-color: #FFCB5E;
  position: relative;
`;

// 사진틀
const ItemImage = styled.div`
  background-color: white;
  float: left;
  width: 430px;
  height: 430px;
  margin: 30px;
  text-align: center;
  border-radius: 2rem;
  
  /* .itemImage {
    width: 200px;
    height: 200px;
  } */
`
// 찜기능(일단하트이모티콘)
const Like = styled.div`
  position: absolute;
  bottom: 35px;
  right: 35px;
  font-size: 60px;
  color: #58419C;
`
// 사진 옆 상품 정보틀
const ItemInfo = styled.div`
  float: left;
  width: 420px;
  margin: 40px 30px 30px 40px;
  //background-color: white;
`
// 상품명
const ItemInfoTitle = styled.div`
  font-size: 50px;
  font-weight: 900px;
  margin: 60px 30px 30px 30px;
  //background-color: pink;
`
// 상품가격
const ItemInfoPrice = styled.div`
  font-size: 50px;
  font-weight: 900px;
  margin: 60px 30px 30px 30px;
  //background-color: skyblue;
`
const Review = styled.div`
  width: 100%;
  margin: 100px 0 50px 0;
  height: 180px;
  border-radius: 2rem;
  background-color: #FFCB5E;
  // position: relative;
`
// 별점
const ReviewPoint = styled.div`
  // 추후에 변경해야함.
  float: left;
  margin: 40px 20px 20px 40px;
`

const ReviewInput = styled.input`
  float: left;
  width: 60%;
  height: 70%;
  border-radius: 10px;
  background-color: #F5F5F5;
  margin: 30px 20px 20px 20px;
`
const ReviewButton = styled.button`
  background-color: #58419C;
  margin: 30px 20px 20px 20px;
  width: 120px;
  height: 100px;
  border-radius: 10px;
`
const ReviewOutput = styled.div`
  width: 100%;
  margin: 100px 0 50px 0;
  height: 130px;
  border-radius: 2rem;
  background-color: lightgray;
  border: 2px solid black;
  // position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`
const ReviewContainer = styled.div`
  flex-direction: column;
  display: block;
`
const ReviewTop = styled.div`
  width: 100%;
  //background-color: lightpink;
  height: 30%;
`
const ReviewNickname = styled.div`
  font-size: 16px;
  margin: 10px 0 10px 20px;
  height: 30px;
  //background-color: cyan;
  width: 300px
`
const ReviewModify = styled.button`
  font-size: 12px;
  float: right;
  margin: 12px;
`
const ReviewDelete = styled.button`
  font-size: 12px;
  float: right;
  margin: 12px;
  
`

const ReviewMiddle = styled.div`
  width: 58%;
  position: absolute; 
  height: 50px;
  //background-color: lightsalmon;
  display: block;
`
const ReviewContent = styled.div`
  font-size: 20px;
  // display: table-cell;
  // vertical-align: middle;
  //background-color: lightgreen;
  width: 600px;
  margin: 10px 0 10px 20px;
`
const ReviewDown = styled.div`
  height: 15px;
  width: 30%;
  //background-color: lightskyblue;
  position: absolute;
  display: block;

`
const ReviewDate = styled.div`
  font-size: 15px;
  // display: table-cell;
  // vertical-align: middle;
  //background-color: pink;
  float: right;
  bottom: 30px;
  right: 0;
  position: absolute;
  padding-left: -20px;
`
// https://velog.io/@whoyoung90/TIL-35-WECODE-%EB%B3%84%EC%A0%90-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84
// 재시도

// 깃허브 별점댓글창 찾아보기

const DetailPage = () => {
  return (
    <>
    <Header />
      <Wrap>
      <WrapCenter>
        <ItemContainer>
          <ItemImage>
            <Like>❤</Like>
          </ItemImage>
          <ItemInfo>
            <ItemInfoTitle>햄감자샐러드</ItemInfoTitle>
            <ItemInfoPrice>3,000원</ItemInfoPrice>
          </ItemInfo>
        </ItemContainer>
        <Review>
          <ReviewPoint>⭐⭐⭐⭐⭐</ReviewPoint>
          <ReviewInput></ReviewInput>
          <ReviewButton>게시</ReviewButton>
        </Review>
        <ReviewOutput>
          <ReviewContainer>
            <ReviewTop>
              <ReviewNickname>사용자 닉네임</ReviewNickname>  
              
            </ReviewTop>
            <ReviewMiddle>
              <ReviewContent>아주맛있습니다.</ReviewContent>
              <ReviewDate>2023.01.11</ReviewDate>
              <ReviewDelete>삭제</ReviewDelete>
              <ReviewModify>수정</ReviewModify>
            </ReviewMiddle>
          </ReviewContainer>
        </ReviewOutput>
      </WrapCenter>
      </Wrap>
    <Footer />
    </>
    
  )
};

export default DetailPage;