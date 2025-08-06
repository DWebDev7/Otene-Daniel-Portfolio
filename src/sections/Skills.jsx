import React from 'react'
import { animations  } from '../components/Animations';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaFigma,
  FaCode,
  FaPython,
} from "react-icons/fa";
import { FaGear } from 'react-icons/fa6';

import {
  SiTailwindcss,
  SiPostman,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiDjango,
} from "react-icons/si";


export default function Skills(){


  const skills = [
    { icon: <FaPython className="text-blue-600" />, label: "Python" },
    { icon: <FaReact className="text-blue-400" />, label: "React" },
    { icon: <SiTailwindcss className="text-teal-500" />,label: "Tailwind CSS"},
    { icon: <SiNextdotjs />, label: "Next.js" },
    { icon: <SiTypescript className="text-blue-600" />, label: "TypeScript" },
    { icon: <SiDjango className="text-emerald-700" />, label: "Django" },
    { icon: <FaGitAlt className="text-orange-500" />, label: "Git" },
    { icon: <FaGithub />, label: "GitHub" },
    { icon: <SiPostman className="text-orange-400" />, label: "Postman" },
    { icon: <FaCode className="text-blue-500" />, label: "VS Code" }
  ];


  return (
    <>

    <section id="skills" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-neutral-800 text-3xl text-center font-bold mb-6 flex justify-center gap-2">
          <FaGear/>  My Technical Skills
        </div>
        <div className='w-28 bg-purple-500 h-2 mx-auto'></div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          
          {/* HTML */}
          <div className="border-2 border-gray-900 rounded-md py-6 flex justify-center" {...animations.popUp}>
            <div className="text-center flex flex-col items-center gap-4">
              <svg height="100px" width="100px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path> <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"></path> </g></svg>
              <span className="font-bold text-xl">HTML</span>
              <div className='h-2 w-32 md:w-44 bg-gray-300 rounded-md'></div>
            </div>
          </div>

          {/* CSS */}
          <div className="border-2 border-gray-900 rounded-md py-6 flex justify-center" {...animations.popUp}>
            <div className="text-center flex flex-col items-center gap-4">
              <svg height="100px" width="100px" xmlns="http://www.w3.org/2000/svg" aria-label="CSS3" role="img" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#264de4" d="M72 460L30 0h451l-41 460-184 52"></path><path fill="#2965f1" d="M256 37V472l149-41 35-394"></path><path fill="#ebebeb" d="m114 94h142v56H119m5 58h132v57H129m3 28h56l4 45 64 17v59L139 382"></path><path fill="#ffffff" d="m256 208v57h69l-7 73-62 17v59l115-32 26-288H256v56h80l-5.5 58Z"></path></g></svg>
              <span className="font-bold text-xl">CSS</span>
              <div className='h-2 w-32 md:w-44 bg-gray-300 rounded-md'></div>
            </div>
          </div>

          {/* JavaScript */}
          <div className="border-2 border-gray-900 rounded-md py-6 flex justify-center" {...animations.popUp}>
            <div className="text-center flex flex-col items-center gap-4">
              <svg height="100px" width="100px"  viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M0,0 L256,0 L256,256 L0,256 L0,0 Z" fill="#F7DF1E"> </path> <path d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026" fill="#000000"> </path> <path d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413" fill="#000000"> </path> </g> </g></svg>
              <span className="font-bold text-xl">JavaScript</span>
              <div className='h-2 w-32 md:w-44 bg-gray-300 rounded-md'></div>
            </div>
          </div>

          {skills.map((skill, index) => (
          <div className="border-2 border-gray-900 rounded-md py-6 flex justify-center" {...animations.popUp}>
            <div className="text-center flex flex-col items-center gap-4">
              <div className="text-8xl">{skill.icon}</div>
              <span className="font-bold text-xl">{skill.label}</span>
              <div className='h-2 w-32 md:w-44 bg-gray-300 rounded-md'></div>
            </div>
          </div>
          ))}

          {/* Responsive Design (Device icon) */}
          <div className="border-2 border-gray-900 rounded-md py-6 flex justify-center" {...animations.popUp}>
            <div className="text-center flex flex-col items-center gap-4">
              <svg height="100px" width="100px"  fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 396.494 396.494" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M304.42,330.901h-43.219c-1.56,0-2.834-1.273-2.834-2.834v-10.52c0-1.559-1.275-2.834-2.834-2.834h-60.475 c-1.56,0-2.835,1.275-2.835,2.834v10.52c0,1.561-1.275,2.834-2.835,2.834h-32.491c-1.56,0-2.835,1.275-2.835,2.834v12.17 c0,1.559,1.275,2.834,2.835,2.834h147.521c1.559,0,2.834-1.275,2.834-2.834v-12.17C307.254,332.179,305.979,330.901,304.42,330.901 z"></path> <g> <path d="M377.032,46.368h-308.4c-10.73,0-19.459,8.73-19.459,19.462c0,0,0,37.109,0,50.761c0,6.711-0.498,7.66,4.004,7.66 c2.391,0,5.039,0,7.72,0c3.778,0,3.003-0.949,3.003-7.785c0-13.621,0-50.636,0-50.636c0-2.565,2.168-4.733,4.732-4.733h308.4 c2.563,0,4.731,2.168,4.731,4.733v189.999h-219.87c0,0-7.749-0.014-7.749,10.006c0,5.941,0,17.823,0,23.766 c0,10.006,8,10.006,8,10.006h214.888c10.729,0,19.461-8.729,19.461-19.459V65.83C396.493,55.099,387.763,46.368,377.032,46.368z M222.833,282.804c-4.845,0-8.771-3.926-8.771-8.768s3.926-8.77,8.771-8.77c4.84,0,8.767,3.928,8.767,8.77 S227.673,282.804,222.833,282.804z"></path> <path d="M124.125,141.633H12.559C5.632,141.633,0,147.266,0,154.193v183.372c0,6.926,5.632,12.561,12.559,12.561h111.566 c6.923,0,12.559-5.635,12.559-12.561V154.193C136.684,147.266,131.048,141.633,124.125,141.633z M54.58,154.443h27.523 c1.313,0,2.38,1.064,2.38,2.381c0,1.314-1.066,2.379-2.38,2.379H54.58c-1.315,0-2.379-1.065-2.379-2.379 C52.201,155.507,53.265,154.443,54.58,154.443z M68.175,341.304c-3.59,0-6.5-2.91-6.5-6.5s2.91-6.5,6.5-6.5s6.5,2.91,6.5,6.5 S71.765,341.304,68.175,341.304z M125.893,322.2c0,1.676-1.342,3.047-2.98,3.047H13.774c-1.639,0-2.98-1.371-2.98-3.047V169.825 c0-1.676,1.342-3.046,2.98-3.046h109.139c1.639,0,2.98,1.371,2.98,3.046V322.2z"></path> </g> </g> </g></svg>
              <span className="font-bold text-xl">Responsive Design</span>
              <div className='h-2 w-32 md:w-44 bg-gray-300 rounded-md'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}