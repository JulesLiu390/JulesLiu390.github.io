import React from 'react'
import ServiceCard from './ServiceCard';

export const ServiceCount = () => {
  return (
    <div className='w-full py-6 lg:py-24 mt-24 flex items-center justify-center flex-wrap gap-8'>
        <ServiceCard count={"10+"} text={"Project"} />
        <ServiceCard count={"1000+"} text={"GitHub Commits"} />
        <ServiceCard count={"5+"} text={"Years of Coding Experience"} />
        <ServiceCard count={"∞"} text={"Passion for Learning"} />
    </div>
  )
}


export default ServiceCount;