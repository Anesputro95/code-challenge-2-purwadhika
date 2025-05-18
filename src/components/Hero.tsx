import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className='relative border-2 border-red-500 max-w-full w-500 px-6 md:px-8 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-10 md:gap-0'>

            {/* background */}
            <div className='absolute inset-0 bg-[url("/assets/bg.jpg")] bg-cover bg-center bg-no-repeat opacity-20 -z-10'></div>
            <div className='absolute inset-0'></div>

            {/* Developer Name */}
            <div className='border-2 border-blue-400 w-130 h-120 relative ml-30 mt-80 z-20'>
                <h1>I'M <span className='text-4xl font-black relative left-2 text-fuchsia-900'>Anes Putro</span></h1>
                <h2 className='font-bold py-3'>Full Stack Developer</h2>

                <p className='font-light text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sunt ex corporis. Dolorum omnis tenetur cum sequi minima voluptates amet esse, a perferendis iure minus quis eligendi! Quo, laboriosam. Nesciunt!</p>

                <a href="#contact" className='border-3 border-fuchsia-800 px-5 py-2 rounded-xl relative top-7 font-bold'>Contact</a>
                
            </div>

            {/* Profile */}
            <div className='border-2 border-purple-500 w-200 h-200 relative overflow-visible'>
                <img src="/assets/1.png" alt="" 
                className='absolute  w-[1000px] scale-160 top-53 right-42'
                />
                
                {/* logo socmed */}
                <div>
                    
                </div>
            </div>
            
        </section>
    )
}

export default Hero