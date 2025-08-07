import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React, { useEffect, useState } from "react"
import Image from "next/image"

const Hero = () => {
  const [animateServices, setAnimateServices] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateServices(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Image 
            src="/Uburiza.png" 
            alt="UBURIZA SOLUTIONS" 
            width={250} 
            height={80} 
            className="hero-logo"
          />
          <h1 className='hero-title'>WE BUILD DIGITAL EXPERIENCES</h1>

          <div className='sub-heading'>
            <div className={`service-item ${animateServices ? 'slide-in' : ''}`}>
              <TitleSm title='WEBSITES' />
            </div>
            <span className={`dot ${animateServices ? 'fade-in' : ''}`}>.</span>
            <div className={`service-item ${animateServices ? 'slide-in' : ''}`} style={{animationDelay: '0.3s'}}>
              <TitleSm title='BRANDING' />
            </div>
            <span className={`dot ${animateServices ? 'fade-in' : ''}`} style={{animationDelay: '0.6s'}}>.</span>
            <div className={`service-item ${animateServices ? 'slide-in' : ''}`} style={{animationDelay: '0.9s'}}>
              <TitleSm title='DIGITAL MARKETING' />
            </div>
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='The last digital agency you ll ever need' />
            <p>Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor. Vivamus a ligula ut velit placerat egestas at id leo. Nulla ac volutpat nunc. Nulla facilisi. Pellentesque tempus tellusut magna porttitor scelerisque.</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero
