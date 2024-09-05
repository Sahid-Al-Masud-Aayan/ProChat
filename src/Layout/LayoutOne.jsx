import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const LayoutOne = () => {

  const mainUserData = useSelector((state)=>state.counter.value)
  const navigaator = useNavigate()

  useEffect(()=>{
    if(mainUserData == null){
      navigaator('/login')
    }
  },[])


  return (
    <>
      <div className="flex min-h-screen">
        <Navbar />
        <div className="flex-grow flex justify-center items-center">
          <Outlet />
        </div>
      </div>

    </>
  )
}

export default LayoutOne