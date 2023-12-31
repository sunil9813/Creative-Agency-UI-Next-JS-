import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT ME' /> <br />
            <br />
            <Title title='The last dedicated developer  you will ever need !' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Lets embark on a journey of innovation together' />
              <p className='desc-p'>I'm Rishi, a passionate Full Stack Developer with over four years of hands-on experience in shaping digital products and CMS solutions. My journey in the dynamic world of web development has been fueled by a dedication to innovation, a mastery of cutting-edge technologies, and a commitment to delivering exceptional user experiences. 
              My proficiency spans across a spectrum of technologies, including React.js, Next.js, Node.js, Vue.js, WordPress, and Shopify. This diverse skill set empowers me to design and develop robust applications that not only meet but exceed client expectations.I specialize in the art of crafting digital products that resonate with users. By seamlessly integrating various frameworks and platforms, I ensure the delivery of scalable and feature-rich solutions that stand out in the digital landscape.Beyond coding, I bring a unique blend of technical expertise and marketing finesse. Proficient in SEO strategies and well-versed in paid advertising, particularly on platforms like Facebook, I contribute to optimizing online visibility and driving targeted traffic.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>5+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>50+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>12+</h1>
                  <h3>Team working remotely</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='My Mission' />
              <br />
              <p className='misson-p'>I believe that seamless, bug-free interactions are the cornerstone of user satisfaction. My mission is to meticulously craft digital solutions that not only meet but exceed user expectations. By dedicating myself to the pursuit of perfection in code, I aim to create a digital landscape where users can navigate effortlessly, free from the disruptions of glitches or bugs.</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
