import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { AiOutlineUsergroupDelete } from "react-icons/ai";



const Navbar = () => {

const majorUserData = useSelector((state)=>state.counter.value)

  return (
    <>
    <nav className='min-h-screen w-[80px] bg-[#FFD93D] p-3'>
      <div className="flex gap-2 justify-center items-center mb-14">
        <img className='w-28 rounded-full' src="./logo.png" alt="Logo" />
      </div>
      <ul className='flex flex-col gap-7'>
      <NavLink to="/chats" className={({ isActive }) =>
          isActive
            ? "flex justify-center items-center gap-2  bg-[#FF8343] py-2  text-[21px] text-[#fff] font-semibold duration-100 rounded-lg"
            : "flex justify-center items-center gap-2  hover:bg-[#FF8343] py-2 duration-100 text-[21px] text-white font-semibold rounded-lg"
        }> <IoChatboxEllipsesOutline className='text-[25px]'/>
          </NavLink>
      <NavLink to="/people" className={({ isActive }) =>
          isActive
            ? "flex justify-center items-center gap-2  bg-[#FF8343] py-2  text-[21px] text-[#fff] font-semibold duration-100 rounded-lg"
            : "flex justify-center items-center gap-2  hover:bg-[#FF8343] py-2 duration-100 text-[21px] text-white font-semibold rounded-lg"
        }><FaUsers className='text-[25px]'/>
          </NavLink>
      <NavLink to="/" className={({ isActive }) =>
          isActive
            ? "flex justify-center items-center gap-2  bg-[#FF8343] py-2  text-[21px] text-[#fff] font-semibold duration-100 rounded-lg"
            : "flex justify-center items-center gap-2  hover:bg-[#FF8343] py-2 duration-100 text-[21px] text-white font-semibold rounded-lg"
        }><IoPersonCircleOutline className='text-[25px]'/>
          </NavLink>
      </ul>
      <div className="flex gap-2 flex-col justify-center items-center mt-[19rem]">
        <img className='w-10 h-w-10 rounded-full' src={majorUserData?.photoURL} alt="Profile picture" />
        <h1 className='text-xl font-medium text-white'>
          {majorUserData?.displayName}
        </h1>
      </div>
      {/* <div className="flex justify-center items-center text-[#9e9e9e] text-sm">
        {majorUserData?.email}
      </div> */}
    </nav>
    </>
  )
}

export default Navbar
