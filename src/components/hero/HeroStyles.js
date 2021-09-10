import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const DivWhite = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: white;
`;

export const TitleWhite1 = styled.h1`
  font-size: 150px;
  color: black;
  transform: translateX(75%);
`;

export const TitleWhite2 = styled.h1`
  font-size: 150px;
  color: black;
  transform: translateX(45%);
`;

export const DivBlack = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  transform: translateX(-101%);
  height: 100%;
  background-image: linear-gradient(to right, #000, #fff);
`;

export const TitleBlack1 = styled.h1`
  font-size: 150px;
  color: white;
  transform: translateX(175%);
  opacity: 0;
`;

export const TitleBlack2 = styled.h1`
  font-size: 150px;
  color: white;
  transform: translateX(145%);
  opacity: 0;
`;

export const ContentBlack = styled.h2`
  color: #fff;
  position: absolute;
  bottom: 80px;
  left: 20px;
  width: 35%;
  z-index: 100;
`;
