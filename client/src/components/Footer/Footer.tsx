import React from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  margin-left: 100px;
`;
// 배경
const Footerdiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 100%;
  height: 100px;
  background-color: #604770;
`;
// 왼쪽 글씨
const FooterInfo = styled.p`
  margin: 5rem;
  color: white;
  font-size: 20px;
`;

const Footer = () => {
  return (
    <Main>
      <Footerdiv>
        <FooterInfo>
          Main Project CVS Review WEB Service Copyright <br />
          2023 LIFO.
        </FooterInfo>
      </Footerdiv>
    </Main>
  );
};

export default Footer;
