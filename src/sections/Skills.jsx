import React from 'react'

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-center font-bold mb-6">My Skills</h2>
            <div className='grid grid-cols-2 w-full gap-5'>
                <div className='border-2 border-gray-900 rounded-md py-4 flex justify-center'>
                    <div className='text-center'>
                        <div className='text-5xl mb-4'>💻</div> 
                        <span className='font-semibold text-xl'>HTML</span>
                    </div>
                </div>
                <div className='border-2 border-gray-900 rounded-md py-4 flex justify-center'>
                    <div className='text-center'>
                        <div className='text-5xl mb-4'>🎨</div> 
                        <span className='font-semibold text-xl'>CSS</span>
                    </div>
                </div>
                <div className='border-2 border-gray-900 rounded-md py-4 flex justify-center'>
                    <div className='text-center'>
                        <div className='text-5xl mb-4'>⚛️</div> 
                        <span className='font-semibold text-xl'>React</span>
                    </div>
                </div>
                <div className='border-2 border-gray-900 rounded-md py-4 flex justify-center'>
                    <div className='text-center'>
                        <div className='text-5xl mb-4'>🌪️</div> 
                        <span className='font-semibold text-xl'>JavaScript</span>
                    </div>
                </div>
                <div className='border-2 border-gray-900 rounded-md py-4 flex justify-center'>
                    <div className='text-center'>
                        <div className='text-5xl mb-4'>🧠</div> 
                        <span className='font-semibold text-xl'>Next JS</span>
                    </div>
                </div>
                <div className='border-2 border-gray-900 rounded-md py-4 flex justify-center'>
                    <div className='text-center'>
                        <div className='text-5xl mb-4'>⚙️</div> 
                        <span className='font-semibold text-xl'>TailWind Css</span>
                    </div>
                </div>
                <div className='border-2 border-gray-900 rounded-md py-4 justify-center'>
                    <div className='text-center'>
                        <div className='text-5xl mb-4'>🚀</div> 
                        <span className='font-semibold text-xl'>Git & GitHub</span>
                    </div>
                </div>
                <div className='border-2 border-gray-900 rounded-md py-4 flex justify-center'>
                    <div className='text-center'>
                        <div className='text-5xl mb-4'>📱</div> 
                        <span className='font-semibold text-xl'>Responsive Design</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills