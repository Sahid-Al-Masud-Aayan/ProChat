import React, { useEffect } from 'react'
import Chats from '../Pages/Chats'
import ChatsUsers from './ChatsUsers'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import NoFriends from '../Pages/NoFriends'

const MainChat = () => {
  // const ChatsUser = useSelector((state)=>state.UserChat.ChatUserSlice)
  // const navigator = useNavigate()

  // useEffect(()=>{
  //   if(ChatsUser == null){
  //     navigator('/no-friends')
  //   }
  // },[])


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
