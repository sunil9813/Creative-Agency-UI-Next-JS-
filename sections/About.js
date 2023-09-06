import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const About = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT US' /> <br />
            <br />
            <Title title='MBCcoins: Menghadirkan Revolusi Keuangan Digital' className='title-bg' />
          </div>

          <div className='content flex'>
            <div className='left w-60 py'>
              <TitleSm title='Kisah Kami' />
              <p className='desc-p'>MBCcoins lahir dari sebuah tugas kolaborasi caas csXbd MBC laboratorium yang menghadirkan mata uang kripto ke dalam kehidupan sehari-hari. Di balik layar, kami adalah tim multidisiplin yang terdiri dari para caas periset pemikir terbaik dalam dunia kripto. Kami membawa pengalaman pengetahuan pemograman kami dalam pengembangan data blockchain, keamanan kripto, dan inovasi teknologi ke dalam setiap produk dan layanan yang kami tawarkan.</p>
              <div className='grid-3'>
                <div className='box'>
              </div>
                <div className='box'>
              </div>
                <div className='box'>
              </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='80%' height='80%' />
            </div>
          </div>

          <div className='content flex1'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='90%' height='90%' />
            </div>
            <div className='right w-60 ml'>  
            <br />
              <br />
                <br />
                  <br />

              <TitleSm title='Misi Kami' />
              <p className='desc-p'>Misi kami adalah untuk memberikan sumber daya yang mudah diakses dan informatif tentang mata uang kripto, serta menyediakan platform yang aman dan mudah digunakan untuk membeli, menjual, dan menyimpan berbagai kripto populer.</p>
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-60 py'>
              <TitleSm title='Bergabunglah dengan Perjalanan Kami'/>
              <p className='desc-p'>Apakah Anda seorang pemula yang ingin memulai perjalanan kripto Anda atau seorang investor berpengalaman yang mencari platform terpercaya, MBC Coins menyambut Anda. Bergabunglah dengan kami hari ini dan mulailah menjelajahi dunia mata uang kripto dengan keyakinan dan pengetahuan.</p>
              <div className='grid-3'>
                <div className='box'>
              </div>
                <div className='box'>
              </div>
                <div className='box'>
              </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.1.jpg' alt='Img' className='round' width='80%' height='80%' />
            </div>
          </div>

          </div>
          </section>
    </>
  )
}

export default About
