import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Coins from "@/components/Coins";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React, { useRef } from "react";

const Hero = () => {
  const [inView, ref] = useInView({ triggerOnce: true });
  const motionRef = useRef(null);

  const motionVariants = {
    hidden: { opacity: 0, z: -100 },
    visible: {
      opacity: 1,
      z: 0,
      transition: { type: "spring", stiffness: "10" },
    },
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <TitleLogo caption="Coins" title="MBC" className="logobg" />
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={motionVariants}
            ref={motionRef}
          >
            <h1 className="hero-title">CRYPTOCURRENCY</h1>
          </motion.div>
          <div className="sub-heading">
            {/* <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={motionVariants}
              ref={motionRef}
            > */}
            <TitleSm title="Multimedia" /> <span>.</span>
            <TitleSm title="Big Data" /> <span>.</span>
            <TitleSm title="Cybersecurity" />
            {/* </motion.div> */}
          </div>
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <TitleLogo caption="The last digital agency you ll ever need" />
            <p>
              A cryptocurrency is a digital currency, which is an alternative
              form of payment created using encryption algorithms. The use of
              encryption technologies means that cryptocurrencies function both
              as a currency and as a virtual accounting system. To use
              cryptocurrencies, you need a cryptocurrency wallet.
            </p>
          </div>
          {/* <Coins />
          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))} */}
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
