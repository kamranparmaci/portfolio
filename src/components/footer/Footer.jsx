import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        paddingTop: "4rem",
        height: "200px",
      }}
    >
      <div className="container">
        <span style={{ color: "#555", display: "block" }}>Created By</span>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: ".5rem",
          }}
        >
          <img
            src="../../images/pic1.png"
            alt="Kamran Parmaci"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <span>Kamran Parmaci</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
