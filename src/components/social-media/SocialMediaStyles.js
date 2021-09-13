import styled from "styled-components";

export const SocialContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.25rem;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 30px;
  bottom: 20px;
  z-index: 999;
`;

export const SocialLink = styled.a`
  color: black;
`;

export const Icons = styled.i`
  font-size: 35px;
  transition: all 0.5s ease;

  &:hover {
    font-size: 60px;
  }
`;
