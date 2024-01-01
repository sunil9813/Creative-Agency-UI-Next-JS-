import { Title, TitleSm } from "@/components/common/Title";
import Link from "next/link";
import React from "react";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <section className="contact bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="CONTACT" /> <br />
            <br />
            <Title title="Let's start right now!" className="title-bg" />
          </div>
          <div className="content py flex1">
            <div className="left w-30">
              <div className="contact-deatils">
                <div className="box">
                  <FiHeadphones size={30} className="icons" />
                  <h3>+91 7018548653</h3>
                  <span>Call me: Mon - Fri 11:00 AM - 2:00 AM</span>
                </div>
                <div className="box">
                  <IoLocationOutline size={30} className="icons" />
                  <h3>Remote Developer</h3>
                  <span>
                    Working in piece environment to produce outstanding results
                  </span>
                </div>
                <div className="box">
                  <FiHelpCircle size={30} className="icons" />
                  <h3>sippyrishu@gmail.com</h3>
                  <span>Drop me a line anytime!</span>
                </div>
                <div className="box">
                  <BiUserCircle size={30} className="icons" />
                  <h3>sippyrishu@gmail.com</h3>
                  <span>Career with me</span>
                </div>
              </div>
              <ul>
                <Link href="https://www.facebook.com/rishi.k.sippy/">
                  <li className="icon">
                    <BsFacebook size={25} />
                  </li>
                </Link>
                <Link href="#">
                  <li className="icon">
                    <AiFillInstagram size={25} />
                  </li>
                </Link>
                <Link href="https://www.linkedin.com/in/rishi-sippy-0785191b8/">
                  <li className="icon">
                    <AiFillLinkedin size={25} />
                  </li>
                </Link>
              </ul>
            </div>
            <div className="right w-70">
              <TitleSm title="Make an online enquiry" />
              <p className="desc-p">Get in touch with me for anything. </p>

              <form>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Name</span>
                    <input type="text" />
                  </div>
                  <div className="inputs">
                    <span>Email</span>
                    <input type="text" />
                  </div>
                </div>
                <div className="grid-2">
                  <div className="inputs">
                    <span>your budget</span>
                    <input type="text" />
                  </div>
                  <div className="inputs">
                    <span>timeframe</span>
                    <input type="text" />
                  </div>
                </div>
                <div className="inputs">
                  <span>TELL ME A BIT ABOUT YOUR QUERY*</span>
                  <textarea cols="30" rows="10"></textarea>
                </div>
                <button className="button-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
