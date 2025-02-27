import React from 'react'
import {Header} from './Header';
import Home from './Home';
import ServiceCount from './ServiceCount';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import HomeSocialLinks from './HomeSocialLinks';
import { AnimatePresence } from 'framer-motion';
import { Socials } from '../utils/helper';
import ParticlesContainer from './ParticlesContainer';

export const App = () => {
  return (
    <div className='w-full flex flex-col justify-center min-h-screen xl:w-full py-32 px-4 lg:px-12 pr-4 lg:pr-32 -z-15'>
      {/* particles container */}
      <ParticlesContainer/>
      {/* header */}
      <Header />

      {/* home container */}
      <Home></Home>

      {/* services count cards */}
      <ServiceCount></ServiceCount>

      {/* about container */}
      <About></About>

      {/* skills container */}
      <Skills/>

      {/* projects container */}
      <Projects/>
      {/* contact container */}
      <Contact />
      {/* footer container */}
      <div className='w-full flex flex-col items-center justify-start mt-32 mb-12'>
        <p className='text-3xl tracking-wide text-gray-300'>
          Jules Liu
        </p>
        <div className='flex items-center justify-center gap-16 mt-16'>
          <AnimatePresence>
            {Socials && Socials.map((item, index) => (
                <HomeSocialLinks key={index} data={item} index={index}></HomeSocialLinks>
            ))}
          </AnimatePresence>
        </div>
        
        <div className='w-full grid grid-cols-1 lg:grid-cols-3 mt-12'>
            <p className='text-gray-300 text-center'>sdfdsfdsfsdafdsafasfdsfsdafas</p>
            <p className='text-gray-300 text-center'>sdfdsfdsfsdafdsafasfdsfsdafas</p>
            <div className='w-full flex flex-col items-center justify-center gap-3'>
            <p className='text-gray-300 text-center'>liunxryojeen@gmail.com</p>
              <p className='text-gray-300 text-center'>+1 416-878-7023</p>
              <a href="#">
                <p className='text-green-300 text-center'>Hire me</p>
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App;