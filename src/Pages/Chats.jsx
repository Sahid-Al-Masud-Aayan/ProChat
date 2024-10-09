import React from 'react'
import { FaRegPaperPlane } from 'react-icons/fa6'
import { IoPaperPlaneSharp } from "react-icons/io5";

const Chats = () => {
  return (
    <div>
         <div className="relative w-full bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg')] bg-cover bg-center">
        <div className="px-5 py-2 bg-[#ffbf00] flex justify-center items-center ">
        <div  className="flex justify-between ">
                        <div className='flex items-center gap-5'> 
                          <div className=" bg-green-100 w-[40px] h-[40px] rounded-full overflow-hidden">
                            <img src='' alt="user photo" />
                          </div>
                          <h2 className='text-xl font-medium'>Developer</h2>
                      </div>
            </div>
        </div>
        <div className="p-5 h-[672px]  overflow-y-scroll">
            
        <div className="">
  <div className="ml-auto w-fit py-2 px-5 rounded-xl bg-[#eee]">
    <p className="sender_msg text-lg text-black rounded-lg">I am hacker and i am gonna leak your all information</p>
  </div>
  <div className="flex justify-end">
    <p className="text-xs font-normal text-black mr-2">6:29pm</p>
  </div>
</div>

                        
                        
                        <div className=' w-fit py-2 px-5 bg-[#ffb013] rounded-xl'> 
                        <p className="text-lg text-white rounded-lg">Helloo there</p>
                        </div>
                        <p className="text-xs font-normal text-gray-700  ">6:32pm</p> 
        </div>
        <div className="absolute top-[90%] gap-3 flex w-full px-8">

        <input
            // value={msg}
            // onChange={(e)=>setMsg(e.target.value)}
            // onKeyDown={(e)=>handelKey(e)}
            type="text"  className='w-full rounded-full h-[50px] p-5 bg-white/30 backdrop-blur-sm outline-none text-xl font-medium text-[#000000] placeholder:text-white' placeholder='Type your chat...'/>
            <button 
            // onClick={handelSend}
            className='text-4xl text-[#ffb700] active:scale-[0.6] hover:text-black/60 hover:rotate-[360deg] duration-700'><IoPaperPlaneSharp /></button>
            </div>
        {/* <div className="bg-white px-5 border-t-2 border-[#4c4c4c] flex rounded-full h-[50px] ">
            <input
            // value={msg}
            // onChange={(e)=>setMsg(e.target.value)}
            // onKeyDown={(e)=>handelKey(e)}
            type="text"  className='w-full bg-transparent outline-none text-xl font-medium text-[#002e89] ' placeholder='Type your chat'/>
            <button 
            // onClick={handelSend}
            className='text-2xl text-[#ffb700] active:scale-[1.1] hover:text-black'><FaRegPaperPlane /></button>
        </div> */}
    </div>
    </div>
  )
}

export default Chats
