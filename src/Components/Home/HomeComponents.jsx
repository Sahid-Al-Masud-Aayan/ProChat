import React from 'react'

const HomeComponents = () => {
  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <div className="w-[400px] h-[350px] flex flex-col justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg rounded-lg overflow-hidden">
        <div className="flex justify-center mt-4">
          <img
            className="w-54 h-54 object-cover rounded-full border-4 border-white"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
        </div>
        <div className="p-4 text-center">
          <h2 className="text-4xl font-semibold text-white">John Doe</h2>
          <p className="text-lg text-gray-300">johndoe@example.com</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default HomeComponents
