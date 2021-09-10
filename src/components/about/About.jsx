import React, { useRef, useEffect } from "react";
import {
  FlexItems,
  Image,
  Content,
  HeaderSml,
  Paragraph,
  BorderImage,
  AboutPadding,
} from "./AboutStyles.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/src/all";

const AboutStyles = () => {
  let ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(ref.current, {
      duration: 1,
      y: "20px",
      x: "20px",
      scrollTrigger: {
        trigger: ref.current,
        toggleActions: "play none none none",
      },
    });
    gsap.to("h3,h2", {
      duration: 2,
      delay: 0.5,
      rotateX: 0,
      scrollTrigger: {
        trigger: ref.current,
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <AboutPadding>
      <div className="container">
        <FlexItems>
          <Image>
            <BorderImage ref={ref}></BorderImage>
          </Image>
          <Content>
            <HeaderSml>About Me</HeaderSml>
            <Paragraph>
              Hello! My name is Amir and i enjoy programming. i'm a self taugth
              frontend developer who enjoy's solving problems. i start learning
              web development in 2020 and ever since i've learnt HTML / Css /
              Javascript / React / Redux and Wordpress. i'm a good team player
              and i also have good eye for detailes, if you are intrested you
              can see some of my works below.
            </Paragraph>
          </Content>
        </FlexItems>
      </div>
    </AboutPadding>
  );
};

export default AboutStyles;
