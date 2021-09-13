import styled from "styled-components";
import img from "../../images/pic2.jpeg";

export const AboutPadding = styled.div`
  padding: 5rem 0;
`;

export const FlexItems = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 3rem;
  align-items: center;
  justify-content: space-between;
  height: auto;
  width: 100%;
  margin: 0 auto;

  @media only screen and (max-width: 776px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media only screen and (min-width: 777px) and (max-width: 1024px) {
    column-gap: 1rem;
  }
`;
export const Image = styled.div`
  background: url(${img}) no-repeat center center/cover;
  height: 500px;
  width: 70%;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }

  @media only screen and (max-width: 776px) {
    width: 80%;
    height: 400px;
    margin-bottom: 3.5rem;
  }

  @media only screen and (min-width: 777px) and (max-width: 1024px) {
    height: 90%;
  }
`;

export const BorderImage = styled.div`
  position: absolute;
  border: 10px solid #e4a86d;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

export const Content = styled.div`
  width: 70%;

  @media only screen and (max-width: 776px) {
    width: 80%;
  }
`;
export const HeaderSml = styled.h3`
  font-size: 36px;
  color: #e4a86d;
  margin-bottom: 8px;
  line-height: 1.7;
  transform: rotateX(90deg);
`;

export const Paragraph = styled.p`
  font-size: 20px;
  color: 000;
  font-family: "Playfair Display", serif;
  line-height: 1.7;
`;
