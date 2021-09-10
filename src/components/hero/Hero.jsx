import React, { useEffect, useRef } from "react";
import "./HeroStyles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/src/all";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  let containerRef = useRef(null);
  useEffect(() => {
    gsap.to(".div2, h1", {
      x: "0",
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
    <div
      style={{ width: "100vw", height: "100vh", position: "relative" }}
      // className="hero-container"
      ref={containerRef}
    >
      <div
        style={{
          position: "absolute",
          left: "0",
          top: "0",
          fontSize: "200px",
          width: "100%",
          height: "100%",
          backgroundColor: "white",
        }}
      >
        <h1
          className="h1"
          style={{
            fontSize: "150px",
            color: "black",
            transform: "translateX(75%)",
          }}
        >
          Hello
        </h1>
        <h1
          style={{
            fontSize: "150px",
            color: "black",
            transform: "translateX(45%)",
          }}
        >
          I'm Kamran
        </h1>
      </div>
      <div
        className="div2"
        style={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "100%",
          transform: "translateX(-101%)",
          height: "100%",
          backgroundImage: "linear-gradient(to right, #000, #fff )",
        }}
      >
        <h1
          className="h2"
          style={{
            fontSize: "150px",
            color: "white",
            transform: "translateX(176%)",
            opacity: "0",
          }}
        >
          Hello
        </h1>
        <h1
          className="h2"
          style={{
            fontSize: "150px",
            color: "white",
            transform: "translateX(146%)",
            opacity: "0",
          }}
        >
          I'm Kamran
        </h1>
      </div>
      <h2
        className="h2"
        style={{
          color: "#fff",
          position: "absolute",
          bottom: "80px",
          left: "20px",
          width: "35%",
          zIndex: "100",
        }}
      >
        A passionate Frontend Web Developer having an experience of building Web
        applications with JavaScript / Reactjs / Nodejs
      </h2>
    </div>
  );
};

export default Hero;
