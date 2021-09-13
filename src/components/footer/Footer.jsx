import React from "react";
import {
  FooterContainer,
  FooterCreatorContainer,
  FooterImgCreator,
  FooterSpan,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterSpan>Created By</FooterSpan>
        <FooterCreatorContainer>
          <FooterImgCreator src="../../images/pic1.png" alt="Kamran Parmaci" />
          <span>Kamran Parmaci</span>
        </FooterCreatorContainer>
      </div>
    </FooterContainer>
  );
};

export default Footer;
