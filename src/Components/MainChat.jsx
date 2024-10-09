import React from 'react'
import Chats from '../Pages/Chats'
import ChatsUsers from './ChatsUsers'

const MainChat = () => {
  return (
    <div className='flex'>
      <ChatsUsers/>
      <div className="flex-grow">
      <Chats/>
      </div>
    </div>
  )
}

export default MainChat
