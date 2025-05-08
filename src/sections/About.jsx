import React from 'react'

const About = () => {
  return (
    <section id="about" className="mt-10 bg-neutral-800 text-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <span className="text-xl text-purple-500 font-semibold block mb-2">About Me</span>
        <h2 className="text-4xl font-bold mb-4 text-white">Who Am I?</h2>
        <p className="text-lg leading-relaxed mb-6 text-gray-300">
          I'm a creative and detail-oriented developer with 3+ years of experience in designing,
          developing, and maintaining responsive websites. I specialize in <span className="text-purple-400 font-semibold">React</span>, <span className="text-purple-400 font-semibold">Next.js</span>, and <span className="text-purple-400 font-semibold">Tailwind CSS</span>. I love turning complex problems into simple,
          beautiful, and intuitive solutions.
          <br /><br />
          A Front-End Web Developer passionate about building beautiful and functional websites 🌐
        </p>
        <button className="rounded-full bg-purple-600 px-6 py-3 text-white font-medium hover:bg-purple-700 transition">
          Download CV
        </button>
      </div>
    </section>

  )
}

export default About