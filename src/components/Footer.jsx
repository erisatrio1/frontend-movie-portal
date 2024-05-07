import React from 'react'
import { IoHeartSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className='mx-10 md:mx-24 md:mt-9 p-4 flex justify-between items-center text-white'>
      <h1>Copyright &copy; 2024  </h1>
      <div className='flex justify-center items-center gap-1'>
        <h1>Made with</h1>
        <IoHeartSharp size={24}/>
        <h1>by Eri</h1>
      </div>
    </footer>
  )
}

export default Footer