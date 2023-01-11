import React from "react";
import styled from "styled-components";

// 검정 배경
const Footerdiv = styled.div`
  width: 100%;
  background-color: #383838;
  height: 100px;
  display: flex;
  align-items: center;
`
// 왼쪽 글씨
const FooterInfo = styled.p`
  width:400px; 
  font-size: 25px;
  color: white;
  // margin: 25px;
  //background-color: skyblue;
  text-align: center;
  //height: 50px;
`
// 오른쪽 로고
const FooterLogo = styled.img`
  float: right;
  text-align: center;

`

const Footer = () => {
  return (
    <Footerdiv>
      <FooterInfo>Copyright 2023 LIFO.</FooterInfo>
      <FooterLogo></FooterLogo>
    </Footerdiv>
  )
};

export default Footer;

// 모든 페이지에 연결하는거 찾아보기