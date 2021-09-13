import React from "react";
import SocialMedia from "../social-media/SocialMedia";
import "./HeroStyles";
import {
  ContentBlack,
  FlexBox,
  HeroContainer,
  Img,
  TitleWhite1,
  TitleWhite2,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroContainer>
      <Img>
        <FlexBox>
          <TitleWhite1 className="h1">Hello</TitleWhite1>
          <TitleWhite2>I'm Kamran</TitleWhite2>
          <ContentBlack className="h2">
            A passionate Frontend Web Developer having an experience of building
            Web applications with JavaScript / Reactjs
          </ContentBlack>
        </FlexBox>
        <SocialMedia />
      </Img>
    </HeroContainer>
  );
};

export default Hero;
