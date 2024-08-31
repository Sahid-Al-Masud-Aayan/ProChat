import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const LayoutOne = () => {

  const mainUserData = useSelector((state)=>state.counter.userData)
  const navigaator = useNavigate()

  useEffect(()=>{
    if(mainUserData == null){
      navigaator('/login')
    }
  },[])


  return (
    <Outlet/>
  )
}

export default LayoutOne