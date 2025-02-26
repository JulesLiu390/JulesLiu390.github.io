import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { Hero } from '../assets';
import HeroTypeWritter from './HeroTypeWritter';
import { Socials } from '../utils/helper';
import HomeSocialLinks from './HomeSocialLinks';

export const Home = () => {
  return (
    <section id="home" className='flex items-center justify-center flex-col gap-12 relative'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
            {/* content section */}
            <div className='w-full h-full flex flex-col items-center lg:items-start justify-center gap-4'>

                <h2 className='text-3xl lg:text-4xl text-gray-300'>hello, it's me
                    <span className='block tracking-wider text-4xl lg:text-6xl mt-4 text-white'>Jules Liu</span>
                </h2>

                {/* type writter */}
                <h2 className='text-2xl lg:text-4xl text-gray-300 mt-4'>And I'm{" "}
                    <HeroTypeWritter words={["a Dveloper..", "a Student..", "a Server.."]} speed={100}/>
                </h2>

                <p className='text-base text-gray-300 mt-6 text-center lg:text-left'>
                I have always enjoyed solving complex problems, which initially drew me to competitive programming and later evolved into a passion for data analytics and full-stack development. With a background in Information Management and Information Systems from Hefei University, I am currently pursuing a Master’s in Analytics with AI Concentration at Northeastern University to further refine my skills in data-driven decision-making.
                </p>
                {/* social media links */}
                <div className='flex items-center justify-center gap-16 mt-16'>
                    <AnimatePresence>
                        {Socials && Socials.map((item, index) => (
                            <HomeSocialLinks key={index} data={item} index={index}></HomeSocialLinks>
                        ))}
                    </AnimatePresence>
                </div>
                {/* hire me */}
                <a href='#' className='mt-12 border border-[rgba(255,255,255,0.3)] rounded-xl placeholder-zinc-800 py-3 active:95 hover:border-green-300 group px-8'
                style={{boxShadow:"inset 0px 0px 10px rgba(255, 255, 255, 0.4)"}}>
                    <p className='text-gray-300  group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-green-500'>Hire me</p>
                </a>
            </div>

            {/* hero image */}
            <div className='w-full h-full flex items-center justify-center lg:justify-center'>
                <motion.img 
                initial={{y:0}}
                animate={{y:[-10,10,-10]}}
                transition={{
                    repeat:Infinity,
                    duration:2,
                    ease:"linear"
                }}
                src={Hero} className='w-auto h-auto object-contain rounded-full'>
                </motion.img>
            </div>
        </div>

    </section>
  )
}


export default Home;