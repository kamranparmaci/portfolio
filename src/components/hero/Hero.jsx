import React, { useEffect, useRef } from "react";
import "./HeroStyles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/src/all";
import {
  ContentBlack,
  DivBlack,
  DivWhite,
  HeroContainer,
  TitleBlack1,
  TitleBlack2,
  TitleWhite1,
  TitleWhite2,
} from "./HeroStyles";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  let containerRef = useRef(null);

  useEffect(() => {
    gsap.to(".div2, h1", {
      x: "0",
      paddingLeft: "20px",
      duration: "5",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        scrub: true,
        pin: true,
      },
    });
    gsap.to(".h2", {
      x: "0",
      paddingLeft: "20px",
      opacity: "1",
      duration: "5",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        scrub: true,
        pin: true,
      },
    });
  });

  return (
    <HeroContainer ref={containerRef}>
      <DivWhite>
        <TitleWhite1 className="h1">Hello</TitleWhite1>
        <TitleWhite2>I'm Kamran</TitleWhite2>
      </DivWhite>
      <DivBlack className="div2">
        <TitleBlack1 className="h2">Hello</TitleBlack1>
        <TitleBlack2 className="h2">I'm Kamran</TitleBlack2>
        <ContentBlack className="h2">
          A passionate Frontend Web Developer having an experience of building
          Web applications with JavaScript / Reactjs
        </ContentBlack>
      </DivBlack>
    </HeroContainer>
  );
};

export default Hero;
