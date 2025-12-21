import React from 'react'
import { BsCaretUpFill } from "react-icons/bs";
const Heroback = () => {
  return (
    <>
    <div className='min-h-screen flex flex-col justify-center items-center '>
        <div className='sm:text-4xl text-2xl font-semibold backdrop-blur-2xl font-limelight py-4 px-2 border-8 border-white bg-gray-200 bg-opacity-35'>Perovskite Innovation</div>
        <div className=' sm:text-2xl text-sm font-light bg-opacity-80 bg-yellow-300 px-2 mt-4'>Perovskite Inspired Technology</div>
    <div className='flex justify-center items-end'>
        {/* <BsCaretUpFill className='text-5xl text-black' /> */}
    </div>
    </div>
    </>
  )
}

export default Heroback