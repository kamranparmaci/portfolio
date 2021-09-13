import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const Img = styled.div`
  position: relative;
  background: url("../../images/pic3.png") no-repeat center center / cover;
  width: 100%;
  height: 100%;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 1024px) {
    background: url("../../images/pic3-responsive.png") no-repeat center center /
      cover;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem 3rem 0 0;
`;

export const TitleWhite1 = styled.h1`
  font-size: 110px;
  color: white;
  padding-top: 4rem;
  align-self: flex-end;
  z-index: 110;

  @media only screen and (max-width: 776px) {
    font-size: 50px;
  }

  @media only screen and (min-width: 777px) and (max-width: 1024px) {
    font-size: 90px;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1334px) {
    font-size: 70px;
  }
`;

export const TitleWhite2 = styled.h1`
  font-size: 110px;
  color: white;
  align-self: flex-end;
  margin-top: -3rem;
  z-index: 110;

  @media only screen and (max-width: 776px) {
    font-size: 50px;
    margin: -1rem 0 2rem;
  }

  @media only screen and (min-width: 777px) and (max-width: 1024px) {
    font-size: 90px;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1334px) {
    font-size: 70px;
    margin-top: -2rem;
  }
`;

export const ContentBlack = styled.h3`
  color: white;
  align-self: flex-end;
  width: 35%;
  z-index: 110;

  @media only screen and (max-width: 1024px) {
    width: 70%;
  }
`;
