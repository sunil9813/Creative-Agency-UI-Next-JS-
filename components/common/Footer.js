import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook, BsLine } from "react-icons/bs"
import { AiFillAlert, AiFillBehanceCircle, AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='MBC' caption='Coins' className='logobg' />
              <br />
              <span>
                Questions? Reach us <br /> Monday – Friday from 9 am to 6 pm
              </span>
              <br />
              <br />
              <h3>Line @sok8073r</h3>
              <br />
              <button className='button-primary'>Request for quote</button>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/about'>About</Link>
              </li>
              <li>
                <Link href='/team'>Team</Link>
              </li>
              <li>
                <Link href='/analysis'>Analysis</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
              <li>
                <Link href='/'>Log out</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='https://liff.line.me/1645278921-kWRPP32q/?accountId=sok8073r'>
                    <BsLine size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://github.com/thufailalfath11/MBCcoins_Website.git'>
                    <AiFillGithub size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.instagram.com/mbclab/?hl=id'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillAlert size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2023 THE SEVEN. ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span>GORKCODER COMPANY</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
