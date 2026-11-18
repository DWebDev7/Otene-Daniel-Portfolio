import React from 'react'
import { animations } from '../components/Animations';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaPython,
  FaMobileAlt,
} from "react-icons/fa";
import { FaGear } from 'react-icons/fa6';
import {
  SiTailwindcss,
  SiPostman,
  SiNextdotjs,
  SiTypescript,
  SiDjango,
} from "react-icons/si";

const skills = [
  { Icon: FaHtml5, color: "text-orange-500", label: "HTML" },
  { Icon: FaCss3Alt, color: "text-blue-500", label: "CSS" },
  { Icon: FaJs, color: "text-yellow-400", label: "JavaScript" },
  { Icon: FaPython, color: "text-sky-600", label: "Python" },
  { Icon: FaReact, color: "text-cyan-500", label: "React" },
  { Icon: SiTailwindcss, color: "text-teal-500", label: "Tailwind CSS" },
  { Icon: SiNextdotjs, color: "text-[#16121f]", label: "Next.js" },
  { Icon: SiTypescript, color: "text-blue-600", label: "TypeScript" },
  { Icon: SiDjango, color: "text-emerald-700", label: "Django" },
  { Icon: FaGitAlt, color: "text-orange-600", label: "Git" },
  { Icon: FaGithub, color: "text-[#16121f]", label: "GitHub" },
  { Icon: SiPostman, color: "text-orange-500", label: "Postman" },
  { Icon: FaCode, color: "text-blue-500", label: "VS Code" },
  { Icon: FaMobileAlt, color: "text-purple-600", label: "Responsive Design" },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 bg-[#f5f3fa] px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-center gap-3 text-3xl font-bold text-[#16121f] md:text-4xl">
          <FaGear className="text-purple-600" />
          <h2>My Technical Skills</h2>
        </div>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-purple-500" />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
          {skills.map(({ Icon, color, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-5 rounded-2xl border border-[#e3deee] bg-white px-4 py-8"
              {...animations.popUp}
            >
              <Icon className={`text-6xl md:text-7xl ${color}`} />
              <span className="text-center text-lg font-semibold text-[#16121f]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}