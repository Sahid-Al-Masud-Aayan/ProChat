import React from 'react'
import { useSelector } from 'react-redux'

const HomeComponents = () => {
  const currentUserData = useSelector((state)=>state.counter.value)

  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <div className="w-[400px] h-[350px] flex flex-col justify-center items-center bg-sky-400 shadow-xl rounded-lg overflow-hidden">
        <div className="flex justify-center mt-4">
          <img
            className="w-[120px] h-[120px] object-cover rounded-full border-4 border-white"
            src={currentUserData?.photoURL}
            alt="Profile"
          />
        </div>
        <div className="p-4 text-center">
          <h2 className="text-4xl font-semibold text-white">{currentUserData?.displayName}</h2>
          <p className="text-lg text-gray-300">{currentUserData?.email}</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default HomeComponents
