import React from 'react'
import WareWebImg from '/assets/wareweb-preview.png'
import { animations } from '../components/Animations';
import { FaHtml5, FaCss3Alt, FaReact, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiDjango } from 'react-icons/si';

const tech = {
  html: FaHtml5,
  css: FaCss3Alt,
  tailwind: SiTailwindcss,
  react: FaReact,
  python: FaPython,
  django: SiDjango,
};

const projects = [
  {
    title: "Pixeo",
    description: "Search and find latest movies easily across devices.",
    href: "https://pixeo.netlify.app/",
    preview: { iframe: "https://pixeo.netlify.app/" },
    stack: ["html", "css", "tailwind", "react"],
  },
  {
    title: "Deh Realties",
    description: "High-impact real estate landing page for lead conversion.",
    href: "https://deh-realties.netlify.app/",
    preview: { iframe: "https://deh-realties.netlify.app/" },
    stack: ["html", "css", "tailwind"],
  },
  {
    title: "Max Chops",
    description: "Menu display for a chef brand — fast and mobile-friendly.",
    href: "https://maxchop.netlify.app/",
    preview: { iframe: "https://maxchop.netlify.app/#" },
    stack: ["html", "css", "tailwind"],
  },
  {
    title: "WareWeb",
    description: "Your warehouse, organized — real-time tracking, clean interface, zero hassle.",
    href: "https://wareweb-8kpy5.sevalla.app/",
    preview: { image: WareWebImg },
    stack: ["python", "css", "tailwind"],
  },
  {
    title: "D4SHOT",
    description: "Portfolio website for a writer, built to showcase scripts and published work.",
    href: "https://d4shot.vercel.app/",
    preview: { iframe: "https://d4shot.vercel.app/" },
    stack: ["react", "django"],
  },
  {
    title: "World Note",
    description: "Your warehouse, organized — real-time tracking, clean interface, zero hassle.",
    href: "#",
    preview: { image: WareWebImg },
    stack: ["python", "css", "tailwind"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-16 bg-[#16121f] px-4 py-24 text-neutral-100">
      <div className="mx-auto max-w-7xl">
        <h2 className="flex items-center justify-center gap-3 text-4xl font-bold text-white md:text-5xl">
          <svg className="w-9 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 3h6v6H3V3zm8 0h6v6h-6V3zM3 11h6v6H3v-6zm8 0h6v6h-6v-6z" />
          </svg>
          Recent Works
        </h2>
        <div className="mx-auto mb-14 mt-4 h-1 w-16 rounded-full bg-purple-500" />

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target={project.href === "#" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-white/10 bg-[#1f1a2c] p-5 transition duration-300 hover:border-purple-500/60 hover:shadow-xl hover:shadow-purple-500/10"
              {...animations.slideRight}
            >
              <div className="mb-5 aspect-video overflow-hidden rounded-xl border border-white/10 bg-[#2a2439]">
                {project.preview.iframe ? (
                  <iframe
                    src={project.preview.iframe}
                    title={project.title}
                    scrolling="no"
                    loading="lazy"
                    className="pointer-events-none h-[720px] w-full overflow-hidden border-none"
                  />
                ) : (
                  <img
                    src={project.preview.image}
                    alt={`${project.title} Preview`}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mb-5 mt-2 flex-1 leading-relaxed text-[#b8b2c8]">{project.description}</p>

              <div className="flex gap-3 border-t border-white/10 pt-4 text-2xl text-[#8f88a3]">
                {project.stack.map((key) => {
                  const Icon = tech[key];
                  return <Icon key={key} className="transition group-hover:text-purple-400" />;
                })}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects