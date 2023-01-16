import React from "react";
import styled from "styled-components";

const DetailHeader = styled.header`
  display: flex;
  justify-content: center;
  height: 200px;
  width: 100%;
  // position: fixed;
  // top: 0;
  // background-color: yellow;
`;
const Header = () => {
  return (
    <DetailHeader>
      <img
        src="https://cdn.discordapp.com/attachments/1059647896942809148/1062250836220203069/Logo-removebg-preview.png"
        alt="logo"
      />
    </DetailHeader>
  )
};

export default Header;
