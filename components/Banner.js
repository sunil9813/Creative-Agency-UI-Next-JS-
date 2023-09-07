import React from "react";
import { Title, TitleLogo } from "./common/Title";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div>
            <Title title="We are looking forward to start a new project" />{" "}
            <br />
            <TitleLogo caption="Coins" title="MBC" className="logobg" />
            <br></br>
          </div>
          <div>
            <button className="button-primary">Request a call-back</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
