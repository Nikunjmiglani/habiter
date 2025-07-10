"use client"
import React from 'react'
import { GiHabitatDome } from "react-icons/gi";
import { IoLogIn } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";



import Link from 'next/link';


const Navbar = () => {
   
  return (
    <nav className='flex justify-between items-center'>



<Link href="/"><div className='flex gap-2 mt-4 ml-2'>
<GiHabitatDome className=' size-9' />
<span className='text-black font-bold font-mono text-3xl'>Habitr</span>
</div></Link>


<div className='flex gap-5  mr-5 mt-3'>
<Link href="https://github.com/Nikunjmiglani"><FaGithub className='size-7 cursor-pointer hover:scale-110 transition-transform duration-200 ' /></Link>
<Link href="/auth/signin"><span className='text-black flex font-semibold text-xl cursor-pointer hover:scale-110 transition-transform duration-200'>
    <IoLogIn className='size-7' />
</span></Link>
 
</div>
 


</nav>

  )
}

export default Navbar