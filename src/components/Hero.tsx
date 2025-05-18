import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className='relative max-w-full w-500 px-6 md:px-8 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-10 md:gap-0 shadow-lg shadow-indigo-500/50'>

            {/* background */}
            <div className='absolute inset-0 bg-[url("/assets/bg.jpg")] bg-cover bg-center bg-no-repeat opacity-20 -z-10'></div>
            <div className='absolute inset-0'></div>

            {/* Developer Name */}
            <div className='w-130 h-120 relative ml-30 mt-80 z-20'>
                <h1>I'M <span className='text-4xl font-black relative left-2 text-fuchsia-900'>Anes Putro</span></h1>
                <h2 className='font-bold py-3'>Full Stack Developer</h2>

                <p className='font-light text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sunt ex corporis. Dolorum omnis tenetur cum sequi minima voluptates amet esse, a perferendis iure minus quis eligendi! Quo, laboriosam. Nesciunt!</p>

                <a href="https://wa.link/k22nkk" className='border-3 border-fuchsia-800 px-5 py-2 rounded-xl relative top-7 font-bold'>Contact</a>
                
            </div>

            {/* Profile */}
            <div className='w-200 h-200 relative overflow-visible'>
                <img src="/assets/1.png" alt="" 
                className='absolute  w-[1000px] scale-160 top-54 right-42'
                />
                
                {/* logo socmed */}
                <div className='w-12 h-56 absolute bottom-10 right-0 z-20 flex flex-col items-center gap-y-10 '>

                    <a href="https://wa.link/k22nkk" className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-130 duration-300'><img src="/assets/wa.png" alt="" /></a>

                    <a href="https://www.linkedin.com/in/adi-putro-wibowo-47a8b8191/" className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-130 duration-300'><img src="/assets/linked.png" alt="" /></a>
                    
                    <a href="https://www.instagram.com/anesputro/" className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-130 duration-300'><img src="/assets/ig.png" alt="" /></a>
                </div>
            </div>
            
        </section>
    )
}

export default Hero