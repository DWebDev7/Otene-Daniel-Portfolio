import React from 'react'
import profilePic from '/assets/profile.jpeg'

const Hero = () => {
  return (
    <section className="bg-white md:text-center py-5" id="home">
      {/* Big Screen Hero */}
      <div className="bg-white pt-36 px-5 flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left">
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Section */}
          <div className="max-w-md">
            <span className="text-purple-700 font-semibold text-xl">Hey There!</span>
            <h2 className="text-5xl font-bold leading-tight">
              I'm <span className="text-purple-600">Otene Daniel</span>
            </h2>
            <p className="text-2xl py-4 text-gray-700">Front End Website Developer</p>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a href="#contact">
                <button className="rounded-full border-2 border-purple-700 bg-purple-600 px-5 py-2 text-white hover:bg-purple-700 transition">
                  Hire Me
                </button>                
              </a>
              <a href="#projects">
                <button className="rounded-full border-2 border-gray-700 px-4 py-2 text-grasy-700 hover:bg-purple-700 hover:border-white hover:text-white transition">
                  My Work
                </button>                
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-40 h-40 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero