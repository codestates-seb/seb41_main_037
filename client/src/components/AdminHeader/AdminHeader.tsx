// import React from "react";
import styled from "styled-components";

const HomePageHeader = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  height: 75px;
  width: 100vw;
  background-color: #b1b1b1;
  box-shadow: 1px 1px 2px #7a7979;
`;

const HomeHeader = () => {
  return (
    <HomePageHeader>
      <img
        src="https://cdn.discordapp.com/attachments/1059647896942809148/1062250836220203069/Logo-removebg-preview.png"
        alt="logo"
      />
    </HomePageHeader>
  );
};

export default HomeHeader;
