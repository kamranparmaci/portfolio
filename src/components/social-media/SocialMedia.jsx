import React from "react";
import { Icons, SocialContainer, SocialLink } from "./SocialMediaStyles";

const SocialMedia = () => {
  return (
    <SocialContainer>
      <SocialLink
        href="https://www.linkedin.com/in/kamran-parmaci-293932166"
        target="_blank"
        rel="noreferrer"
      >
        <Icons className="fab fa-linkedin"></Icons>
      </SocialLink>
      <SocialLink
        href="https://github.com/kamranparmaci"
        target="_blank"
        rel="noreferrer"
      >
        <Icons className="fab fa-github"></Icons>
      </SocialLink>
      <SocialLink
        href="https://www.instagram.com/kamranparmasii"
        target="_blank"
        rel="noreferrer"
      >
        <Icons className="fab fa-instagram"></Icons>
      </SocialLink>
    </SocialContainer>
  );
};

export default SocialMedia;
