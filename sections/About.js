import Banner from "@/components/Banner";
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";

const About = () => {
  const [inView, ref] = useInView({ triggerOnce: true });
  const motionRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0); 

  const motionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };
  const motionVariantsA = {
    hidden: { opacity: 0, z: -100 },
    visible: { opacity: 1, z: 0, transition: { duration: 4 } },
  };

  const motionVariantsB = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <motion.div
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={motionVariantsA}
              ref={motionRef}
            >
              <TitleSm title='ABOUT US' /> <br />
              <br />
              <TitleLogo caption='MBCcoins: Menghadirkan Revolusi Keuangan Digital' className='title-bg' />
            </motion.div>
          </div>

          <div className='content flex'>
            <motion.div
              className='left w-60 py'
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={motionVariants}
            >
              <TitleSm title='Kisah Kami' />
              <p className='desc-p'>
                MBCcoins lahir dari sebuah tugas kolaborasi caas csXbd MBC laboratorium yang menghadirkan mata uang kripto ke dalam kehidupan sehari-hari. Di balik layar, kami adalah tim multidisiplin yang terdiri dari para caas periset pemikir terbaik dalam dunia kripto. Kami membawa pengalaman pengetahuan pemograman kami dalam pengembangan data blockchain, keamanan kripto, dan inovasi teknologi ke dalam setiap produk dan layanan yang kami tawarkan.
              </p>
            </motion.div>

            {windowWidth >= 768 && (
              <motion.div
                className='right w-40 ml'
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
                variants={motionVariantsA}
              >
                <img src='/images/s1.jpg' alt='Img' className='round' width='80%' height='80%' />
              </motion.div>
            )}
          </div>

          <div className='content flex1'>
          {windowWidth >= 768 && (
            <motion.div
              className='left w-40 py'
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={motionVariantsA}
            >
              <img src='/images/s4.jpg' alt='Img' className='round' width='90%' height='90%' />
            </motion.div>
             )}
            
            <motion.div
              className='right w-60 ml'
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={motionVariantsB}
            >
              <br /> <br /> <br /> 
              <TitleSm title='Misi Kami' />
              <p className='desc-p'>
                Misi kami adalah untuk memberikan sumber daya yang mudah diakses dan informatif tentang mata uang kripto, serta menyediakan platform yang aman dan mudah digunakan untuk membeli, menjual, dan menyimpan berbagai kripto populer. Kami juga memiliki yang tekad kuat untuk membawa revolusi dalam dunia kripto dan memperkenalkan fitur-fitur inovatif yang akan memberikan nilai tambah kepada pengguna kami. 
              </p>
            </motion.div>
          </div>

          <div className='content flex'>
            <motion.div
              className='left w-60 py'
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={motionVariants}
            >
              <br /> <br /> 
              <TitleSm title='Bergabunglah dengan Perjalanan Kami' />
              <p className='desc-p'>
                Apakah Anda seorang pemula yang ingin memulai perjalanan kripto Anda atau seorang investor berpengalaman yang mencari platform terpercaya, MBC Coins menyambut Anda. Bergabunglah dengan kami hari ini dan mulailah menjelajahi dunia mata uang kripto dengan keyakinan dan pengetahuan.
              </p>
            </motion.div>

            {windowWidth >= 768 && (
            <motion.div
              className='right w-40 ml'
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={motionVariantsA}
            >
              <img src='/images/s1.1.jpg' alt='Img' className='round' width='80%' height='80%' />
            </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;