import React from "react";
import Logo from "../assets/logo.svg";

const Hero = () => {
  return (
    <>
      <section className="hero section">
        <div className="container">
          <div className="hero-wrap">
            <img src={Logo} alt="Logo" />
          </div>
        </div>
        <div className="btn-down">листайте вниз</div>
      </section>
    </>
  );
};

export default Hero;
