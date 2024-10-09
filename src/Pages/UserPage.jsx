import React from 'react'
import UserComponents from '../Components/Users/UserComponents'
import FriendRequest from '../Components/FriendRequest/FriendRequest'
import Friends from '../Components/Friends/Friends'
import BlockList from '../Components/BlockList'

const HomePage = () => {
  return (
    <div>
      <div className="flex gap-4 justify-center ">
      <UserComponents/>
      <FriendRequest/>
      <Friends/>
      <BlockList/>
      
      </div>
    </div>
  )
}

export default HomePage
