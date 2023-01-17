import React from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: fixed;
  margin-left: 100px;
  bottom: 0;
`;

// 배경
const Footerdiv = styled.div`
  background-color: #604770;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;
// 왼쪽 글씨
const FooterInfo = styled.p`
  width: 420px;
  font-size: 20px;
  color: white;
  // margin: 25px;
  //background-color: skyblue;
  //text-align: center;
  //height: 50px;
  margin-left: 5rem;
`;
// 오른쪽 로고
// const FooterLogo = styled.img`
//   float: right;
//   text-align: center;

// `

const Footer = () => {
  return (
    <Main>
      <Footerdiv>
        <FooterInfo>
          Main Project CVS Review WEB Service Copyright 2023 LIFO.
        </FooterInfo>
      </Footerdiv>
    </Main>
  );
};

export default Footer;

// 모든 페이지에 연결하는거 찾아보기
