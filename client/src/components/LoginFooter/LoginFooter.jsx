import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  height: 70px;
  width: 100%;
  padding: 2.5rem;
  background-color: #58419c;
  color: #fff;
`;

const LoginFooter = () => {
  return (
    <FooterContainer>
      Main Project CVS Review WEB Service Copyright <br />
      2023 LIFO.
    </FooterContainer>
  );
};

export default LoginFooter;
