import React from 'react'
import profilePic from '/assets/profile.jpeg'
import { animations } from '../components/Animations';

const Hero = () => {
  return (
    <section id="home" className="overflow-x-hidden bg-white px-6 pb-24 pt-32 md:pt-40">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-14 text-center md:flex-row md:justify-between md:text-left">
        <div className="max-w-xl" {...animations.fadeUp200}>
          <span className="text-lg font-semibold text-purple-700">Hey There!</span>
          <h1 className="mt-2 text-5xl font-extrabold leading-[1.05] text-[#16121f] md:text-7xl">
            I'm <span className="text-purple-600">Otene Daniel</span>
          </h1>
          <p className="mt-6 inline-block rounded-full bg-purple-600 px-4 py-1.5 text-sm font-medium text-white">
            — Your Full-Stack Web Expert
          </p>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600 md:text-xl">
            I design, build, and deploy high-performance websites and web applications that do more than just look good — they deliver results.
          </p>
          <div className="mt-9 flex justify-center gap-4 md:justify-start">
            <a
              href="#contact"
              className="rounded-full bg-purple-600 px-7 py-3 font-semibold text-white shadow-lg shadow-purple-600/25 transition hover:bg-purple-700"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="rounded-full border-2 border-[#16121f] px-7 py-3 font-semibold text-[#16121f] transition hover:bg-[#16121f] hover:text-white"
            >
              See Work
            </a>
          </div>
        </div>

        <div className="relative shrink-0" {...animations.fadeLeft}>
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-purple-600 md:translate-x-5 md:translate-y-5" />
          <img
            src={profilePic}
            alt="Profile"
            className="relative h-56 w-44 rounded-[2rem] object-cover md:h-[26rem] md:w-80"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero