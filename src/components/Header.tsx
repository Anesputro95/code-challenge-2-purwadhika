import React from 'react'
import Image from 'next/image'


const Header = () => {
    return (
        <div className="flex items-center justify-between px-8 shadow-lg shadow-indigo-500/50">
            
                <div className='logo relative left-10'>
                    <Image src="/assets/logo.png" alt="logo" width={80} height={80} />
                </div>
                <div className='flex space-x-8 relative left-13 scroll-smooth focus:scroll-auto'>
                    <a href="#about">ABOUT</a>
                    <a href="#portofolio">PORTOFOLIO</a>
                    <a href="#contact">CONTACT</a>
                </div>
                <div className=' relative right-10'>
                    <input type="text" placeholder='Search' className='class="bg-input border border-border rounded-lg p-2 pl-10 focus:outline-none focus:ring focus:ring-ring' />
                    <span className='absolute right-3 top-1/2 transform -translate-y-1/2 text-muted '><a href="#search">🔍</a></span>
                </div>

        </div>

    )
}

export default Header
