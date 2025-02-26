import React from 'react'

export const ServiceCard = ({count, text}) => {
  return (
    <div className='relative w-full lg:w-52 h-32 rounded-md border border-[rgba(255,255,255,0.4)] flex items-center justify-center flex-col gap-2 group hover:border-green-300 cursor-pointer bg-black'
    style={{boxShadow:"inset 0 0 10px rgba(255,255,255,0.3) "}}>
        <div className='hidden group-hover:block absolute -inset-1 blur-md bg-gradient-to-br from-green-300 to-green-500 -z-11 before:absolute before:inset-1'>
        </div>

        <div className="absolute inset-0 bg-black rounded-md -z-0"></div>


        <p className='text-2xl text-gray-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-green-500 capitalize font-sans tracking-widest z-10'>{count}</p>
        <p className='text-base text-gray-500 group-hover:text-white group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-green-500 capitalize font-sans tracking-widest z-10'>{text}</p>
        
    </div>
  )
}

export default ServiceCard;