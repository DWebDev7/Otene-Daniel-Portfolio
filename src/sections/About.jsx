import React from 'react'
import { FaDownload } from 'react-icons/fa'
import aboutImg from '/assets/aboutsection.jpg'
import { animations } from '../components/Animations';

const About = () => {
  return (
    <section id="about" className="scroll-mt-16 overflow-x-hidden bg-[#16121f] px-6 py-24 text-neutral-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 md:flex-row">
        <div className="hidden w-full justify-center md:flex md:w-1/2 md:justify-start">
          <div className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border-2 border-purple-500/60" />
            <img
              src={aboutImg}
              alt="About Me"
              className="relative w-[300px] rounded-3xl object-cover md:w-[350px]"
            />
          </div>
        </div>

        <div className="w-full text-center md:w-1/2 md:text-left" {...animations.fadeUp}>
          <h2 className="text-4xl font-bold text-white md:text-5xl">ABOUT ME</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-purple-500 md:mx-0" />

          <div className="mt-8 text-lg leading-relaxed text-[#b8b2c8]">
            <p>
              I’m a full-stack web developer with over 3 years of experience turning ideas
              into scalable digital products. From eye-catching interfaces to robust backend systems, I
              deliver solutions that are fast, secure, and built to grow your business. I specialize in:
            </p>

            <div className="my-6 space-y-2 rounded-2xl border border-white/10 bg-white/5 p-5 text-left">
              <p><span className="font-semibold text-purple-400">Front-end</span>: React, Next.js, Tailwind CSS</p>
              <p><span className="font-semibold text-purple-400">Back-end</span>: Python, Django, REST APIs</p>
              <p><span className="font-semibold text-purple-400">Full-stack delivery</span>: Seamless integrations, efficient databases, and real-world business logic</p>
            </div>

            <p className="my-3">
              I take pride in writing clean, maintainable code and crafting
              digital experiences that are user-focused and performance-driven.
            </p>
            <p className="my-3">
              Whether you're launching a startup, upgrading your existing site, or
              need a custom web app, I combine technical skill with strategic thinking to build websites that truly work.
            </p>
            <p className="mt-5 font-medium text-white">Let’s build something that drives growth — not just traffic.</p>
          </div>

          <a
            href="/assets/Otene Daniel - CV.pdf"
            download
            className="mx-auto mt-8 flex w-fit items-center gap-2.5 rounded-full bg-purple-600 px-7 py-3 font-semibold text-white transition hover:bg-purple-500 md:mx-0"
          >
            Download CV
            <FaDownload />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About