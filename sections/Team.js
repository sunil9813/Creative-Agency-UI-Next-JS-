import React  from 'react';
import { motion } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';
import { teamdata1, teamdata2 } from '@/assets/data/dummydata'; 
import { Card } from '@/components/common/Card';
import { Title, TitleSm, TitleLogo } from '@/components/common/Title';

const Team = () => {
  const [bagiancs, inView1] = useInView({triggerOnce: true}); 
  const [bagianbd, inView2] = useInView({triggerOnce: true}); 

  return (
    <>
      <section className='agency bg-top' ref={bagiancs}>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='MEET OUR CYBERSECURITY TEAM' /> <br />
            <br />
            <TitleLogo caption="A team of smart & passionate creatives" className="title-bg" />
          </div>
          <motion.div
            initial={{ opacity: 0, z: -100 }}
            animate={{ opacity: inView1 ? 1 : 0, z: inView1 ? 0 : -100, transition: { duration: 2 } }}
            className='grid-5 py'
          >
            {teamdata1.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className='agency bg-top' ref={bagianbd}>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='MEET OUR BIG DATA TEAM' />
            <br />
            <br />
            <TitleLogo caption='Another team of talented individuals' className='title-bg' />
          </div>
          <motion.div
            initial={{ opacity: 0, z: -100 }}
            animate={{ opacity: inView2 ? 1 : 0, z: inView2 ? 0 : -100, transition: { duration: 2 } }}
            className='grid-5 py'
          >
            {teamdata2.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default Team;
