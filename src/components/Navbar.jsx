import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
      <nav className='flex justify-between items-center h-16 px-9 mx-auto z-[100] relative md:px-24 bg-[#030303]'>
        <Link className="text-2xl font-bold text-white bg-[#F0A500] px-2 py-1 rounded-xl" to={'/'}>
          <h1>TMDB</h1>
        </Link>
        <div className="hidden md:flex gap-9 text-white">
          <Link className="hover:text-[#F0A500] ease-in-out duration-300" to={'/trending'}>Trending</Link>
          <Link className="hover:text-[#F0A500] ease-in-out duration-300" to={'/populer'}>Popular</Link>
          <Link className="hover:text-[#F0A500] ease-in-out duration-300" to={'/nowplaying'}>Now Playing</Link>
          <Link className="hover:text-[#F0A500] ease-in-out duration-300" to={'/upcoming'}>Up Coming</Link>
        </div>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} className="cursor-pointer" color='white'/>}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-full h-[35%] border border-white bg-[#030303] ease-in-out duration-500 z-50"
              : "ease-in-out duration-500 fixed top-[-100%]"
          }
        >
          <div className="flex flex-col justify-center items-center text-white gap-3 m-4">
            <AiOutlineClose onClick={handleNav} size={20} className="cursor-pointer" />
            <Link to={'/'}>
              <h1 className="text-2xl font-bold text-[#F0A500]">TMDB</h1>
            </Link>
            <Link className="border-b border-b-[#F0A500] w-[70%] text-center" to={'/trending'}>Trending</Link>
            <Link className="border-b border-b-[#F0A500] w-[70%] text-center" to={'/populer'}>Popular</Link>
            <Link className="border-b border-b-[#F0A500] w-[70%] text-center" to={'/nowplaying'}>Now Playing</Link>
            <Link className="border-b border-b-[#F0A500] w-[70%] text-center" to={'/upcoming'}>Up Coming</Link>
          </div>
        </div>
      </nav>
  )
}

export default Navbar