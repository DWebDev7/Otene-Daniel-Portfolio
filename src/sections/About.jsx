import React from 'react'
import aboutImg from '../assets/about-banner.jpg'

const About = () => {
  return (
<section id="about" className="mt-10 bg-neutral-800 text-gray-100 py-20 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
    
    {/* Image on the left */}
    <div className="w-full md:w-1/2 hidden md:flex justify-center md:justify-start">
      <img
        src={aboutImg} // or update the path as needed
        alt="About Me"
        className="w-[300px] md:w-[350px] object-cover"
      />
    </div>

    {/* Text on the right */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-4xl font-bold text-white mb-4">ABOUT ME</h2>
      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        I'm a creative and detail-oriented developer with 3+ years of experience in designing,
        developing, and maintaining responsive websites. I specialize in 
        <span className="text-purple-400 font-semibold"> React</span>, 
        <span className="text-purple-400 font-semibold"> Next.js</span>, and 
        <span className="text-purple-400 font-semibold"> Tailwind CSS</span>. I love turning complex problems into 
        simple, beautiful, and intuitive solutions.
        <br /><br />
        A Front-End Web Developer passionate about building beautiful and functional websites 🌐
      </p>
      <a href="Gabriel Daniel - Resume (CV)">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition font-medium">
          View My Work
        </button>
      </a>
    </div>

  </div>
</section>



  )
}

export default About