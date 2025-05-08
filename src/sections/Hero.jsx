import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20 pt-36 md:text-center px-5" id="home">
        <span className='text-purple-700 font-semibold text-xl'>Hey!</span>
        <h2 className="text-4xl font-bold">I'm <span className='text-purple-600'>Otene Daniel</span></h2>
        <p className="text-xl py-4">Front End Website Developer</p>
        <div className='flex gap-3'>
            <button className='rounded-full bg-purple-600 px-3 py-2 text-white'>Hire Me</button>
            <button className='rounded-full border-gray-800 border-2 px-3 py-2 text-black'>My Work</button>
        </div>
    </section>
  )
}

export default Hero