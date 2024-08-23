import React from 'react'
import Lottie from "lottie-react";
import animate from '../../public/ErrorPlay.json'
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <>
    <div className=" flex flex-col justify-center items-center min-h-screen">
      <div className=" border-[5px] border-[#0055EB] bg-[#00e3eb] rounded-2xl p-4 w-[1200px] flex flex-col justify-center items-center">
      <h1 className=' text-4xl text-red-600 font-bold'>Page Error!</h1>
    <Lottie className=' w-[500px] h-[500px]' animationData={animate}/> 
    <h1 className=' text-4xl font-medium italic'>Oops! Page not found. <span className=' not-italic font-semibold text-[#EE832B]'>Go back to <Link to='/' className=' font-extrabold text-[#e1591a]'>home</Link></span></h1>
      </div>
    </div>
    </>
  )
}

export default NotFound