import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid-4">
            <div className="logo">
              <TitleLogo title="Sippy" caption="Rishi" className="logobg" />
              <br />
              <span>
                Questions? <br /> Reach to me <br /> 24*7 available
              </span>
              <br />
              <br />
              <h3>+91 7018548653</h3>
              <h3>sippyrishu@gmail.com</h3>
              <br />
              <button className="button-primary">Request for quote</button>
            </div>
            <ul>
              <h3>Quick Links</h3>
              <li>
                <Link href="/">About Me</Link>
              </li>
              {/* <li>
                <Link href='/'>Our team</Link>
              </li> */}
              <li>
                <Link href="/">Showcase</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Demo design system</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href="/">Web Design & Development</Link>
              </li>
              <li>
                <Link href="/">App Design & Development</Link>
              </li>
              <li>
                <Link href="/">Branding & Creative Services</Link>
              </li>
              <li>
                <Link href="/">Digital Marketing</Link>
              </li>
              <li>
                <Link href="/">E-Commerce</Link>
              </li>
              <li>
                <Link href="/">SEO</Link>
              </li>
              <li>
                <Link href="/">Paid Ads / PPC</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className="connect">
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
              </div>
            </ul>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© 2023 Rishi Sippy. ALL RIGHTS RESERVED.</span>
            </div>
            <div className="connect">
              <span>Rishi Sippy</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
