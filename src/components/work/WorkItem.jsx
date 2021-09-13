import React, { useEffect, useRef } from "react";
import {
  Wrapper,
  Image,
  Content,
  ContentH,
  ContentP,
  ContentLink,
} from "./WorkStyles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/src/all";

const WorkItem = (props) => {
  gsap.registerPlugin(ScrollTrigger);
  let itemRef = useRef(null);
  let containerRef = useRef(null);

  useEffect(() => {
    gsap.to(itemRef.current, {
      duration: 1,
      x: "0",
      scrollTrigger: {
        trigger: itemRef.current,
        toggleActions: "restart pause reverse pause",
      },
    });
  }, []);

  return (
    <div ref={containerRef}>
      <Wrapper ref={itemRef} even={props.even}>
        <Content even={props.even}>
          <ContentH even={props.even}>{props.sourceName}</ContentH>
          <ContentP>{props.subTitle}</ContentP>
          <ContentLink
            even={props.even}
            href={props.urlWork}
            target="_blank"
            rel="no-referrer"
          >
            Live Preview
          </ContentLink>
        </Content>
        <Image background={props.image1} />
      </Wrapper>
    </div>
  );
};

export default WorkItem;
