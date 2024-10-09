import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import ChatsUsers from '../Components/ChatsUsers'

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
  <div className="flex-shrink-0">
    <Navbar />
  </div>
  <div className="flex-grow w-full">
    <Outlet />
  </div>
</div>

    </>
  )
}

export default LayoutOne