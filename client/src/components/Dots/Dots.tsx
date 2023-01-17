// import React, { useState } from "react";
import styled from "styled-components";

interface DotProps {
  num?: number;
  scrollIndex: number;
}

const DotDiv = styled.div<{ isSame: boolean }>`
  width: 12px;
  height: 12px;
  border: 1px solid #58419c;
  background-color: ${(props) => (props.isSame ? "#58419c" : "transparent")};
  border-radius: 50%;
  transition-duration: 1000ms;
  &:hover {
    background-color: #58419c;
  }
`;

const Dot = ({ num, scrollIndex }: DotProps) => {
  let isSame = scrollIndex === num ? true : false;
  return <DotDiv isSame={isSame}></DotDiv>;
};

const DotsDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 90%;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20px;
    height: 100px;
  }
`;

const Dots = ({ scrollIndex }: DotProps) => {
  return (
    <DotsDiv>
      <div className="container">
        <Dot num={1} scrollIndex={scrollIndex}></Dot>
        <Dot num={2} scrollIndex={scrollIndex}></Dot>
        <Dot num={3} scrollIndex={scrollIndex}></Dot>
        <Dot num={4} scrollIndex={scrollIndex}></Dot>
      </div>
    </DotsDiv>
  );
};

export default Dots;
