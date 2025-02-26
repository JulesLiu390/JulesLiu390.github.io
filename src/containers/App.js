import React from 'react'
import {Header} from './Header';
import Home from './Home';
import ServiceCount from './ServiceCount';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

export const App = () => {
  return (
    <div className='w-full flex flex-col justify-center min-h-screen xl:w-full py-32 px-4 lg:px-12 pr-4 lg:pr-32 -z-15'>
      {/* particles container */}

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

      {/* footer container */}
    </div>
  )
}

export default App;