import React from 'react'
import  { headerLogo } from '../assets/images'

//the tags that are not closes in normal html 
//make them self closing tags inside jsx

import { hamburger } from '../assets/icons';
//the above asset is for that 3 lines icon usually on the top right corner of different websites


import { navLinks } from '../constants/index';


const Nav = () => {
  return (

    <header className='padding-x py-8 absolute z-10 w-full'>

        <nav className='flex justify-between items-center max-container'>


            <a href="/">
                <img src={headerLogo}
                 alt="Logo"
                 width={130}
                 height={29}
                />

            </a>
            {/* /on the navbar after the nike logo we have links to all the other pages of the website */}
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>


                {navLinks.map((item)=>(
                    <li key={item.label}>
                        <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                            
                            {/* here we can dynamically render that specific item */}
                            {item.label}
                        </a>

                    </li>
                    
                ))}
                {/* {/* by giving the above property this list to link to other pages will be going to be visible only on desktop devices */}

            </ul>


            <div className=' hidden max-lg:block'>
                <img src={hamburger} alt="hamburger" width={24}  height={25}/>

            </div>

        </nav>
    </header>
  
  )
}

export default Nav
