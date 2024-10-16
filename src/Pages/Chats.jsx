import React from 'react';
import { IoPaperPlaneSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';

const Chats = () => {
  const ChatsUser = useSelector((state) => state.UserChat.ChatUserSlice);
  const inputEnter = (e)=>{
    console.log(e);
    
  }

  return (


    <div className="relative w-full">
      {ChatsUser ? (
        <div className="bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg')] bg-cover bg-center">
          <div className="px-5 py-2 bg-[#ffbf00] flex justify-center items-center">
            <div className="flex justify-between">
              <div className='flex items-center gap-5'>
                <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                  <img src={ChatsUser?.FriendPhoto} alt="user photo" />
                </div>
                <h2 className='text-xl font-medium'>{ChatsUser?.FriendName}</h2>
              </div>
            </div>
          </div>

          <div className="p-5 h-[672px] overflow-y-scroll">
            <div className="ml-auto w-fit py-2 px-5 rounded-xl bg-[#fff]">
              <p className="sender_msg text-lg text-black rounded-lg">I am hacker and I am gonna leak your all information</p>
            </div>
            <p className="text-xs font-normal text-gray-700 text-center mb-5">6:32pm</p>
            <div className='w-fit py-2 px-5 bg-[#ffb013] rounded-xl'>
              <p className="text-lg text-white rounded-lg">Helloo there</p>
            </div>
          </div>

          <div className="absolute top-[90%] gap-3 flex w-full px-8">
            <input
            onKeyDown={(e)=>inputEnter(e)}
              type="text"
              className='w-full rounded-full h-[50px] p-5 bg-white/30 backdrop-blur-sm outline-none text-xl font-medium text-[#000000] placeholder:text-white'
              placeholder='Type your chat...'
            />
            <button className='text-4xl text-[#ffb700] active:scale-[0.6] hover:text-black/60 hover:rotate-[360deg] duration-700'>
              <IoPaperPlaneSharp />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">No Friends Yet</h1>
            <p className="text-gray-600 mb-6">It seems your social tapestry hasn't yet begun to weave. Start adding friends to transcend the labyrinth of solitude!</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all">
              Add Friends
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chats;

