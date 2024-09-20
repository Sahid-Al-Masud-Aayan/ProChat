import React from 'react'
import UserComponents from '../Components/Users/UserComponents'
import FriendRequest from '../Components/FriendRequest/FriendRequest'
import Friends from '../Components/Friends/Friends'

const HomePage = () => {
  return (
    <div>
      <div className="flex gap-8 justify-center">
      <UserComponents/>
      <FriendRequest/>
      <Friends/>
      
      </div>
    </div>
  )
}

export default HomePage
