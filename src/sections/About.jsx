import React from 'react'

const About = () => {
  return (
    <section id="about" className="bg-neutral-800 text-gray-100 max-w-4xl mx-auto py-16 px-4">
        <span className="text-xl text-purple-500 font-semibold mb-6">About Me</span>
        <h2 className="text-3xl font-bold">Who Am I?</h2>
        <p className="text-lg leading-relaxed py-5">
        I'm a creative and detail-oriented developer with 3+ years of experience in designing, developing, and maintaining responsive websites. I specialize in React, Next.js, and Tailwind CSS. I love turning complex problems into simple, beautiful, and intuitive solutions.
        A Front-End Web Developer passionate about building beautiful and functional websites 🌐
        </p>
        <button className='rounded-full bg-purple-600 px-4 py-2 text-white'>Download CV</button>
    </section>
  )
}

export default About