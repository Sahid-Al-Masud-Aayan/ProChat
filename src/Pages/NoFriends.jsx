import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoFriends = () => {

    const naviagate= useNavigate()

    const NavigationButton = ()=>{
        naviagate('/people')
    }

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">No Friends Yet</h1>
        <p className="text-gray-600 mb-6">It looks like you don’t have any friends to chat with. Start adding friends to begin chatting!</p>
        <button onClick={NavigationButton} className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all">
          Add Friends
        </button>
      </div>
    </div>
    </div>
  )
}

export default NoFriends
