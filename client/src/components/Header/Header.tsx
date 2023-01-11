import React from "react";
import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { MdLogout } from "react-icons/md";

const ProductHeader = styled.div`
  height: 100px; // 75px이랑 비교
  // background-color: gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100vm;
`
const HeaderLogo = styled.div`
  // float: left;
  // text-align: center;
  width: 1508px;
  // background-color: black;
  font-size: 40px; 
  display: flex;
  padding: 30px;
`

const Settings = styled.div`
  float: right;
  // text-align: center;
  //background-color: yellow;
  display: flex;
  


  .logo {
    font-size: 40px;
    margin: 10px;
  }
`
const Header = () => {
  return (
    <ProductHeader>
      <HeaderLogo>OOOO</HeaderLogo>
      <Settings>
        <FaRegUserCircle className="logo" />
        <AiFillSetting  className="logo" />
        <MdLogout  className="logo" />
      </Settings>
    </ProductHeader>
  )
};

export default Header;
