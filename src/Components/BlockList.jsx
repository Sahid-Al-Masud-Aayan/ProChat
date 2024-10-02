import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { FiUserPlus } from 'react-icons/fi';
import { AiOutlineUserAdd, AiOutlineUserDelete, AiOutlineUsergroupAdd } from 'react-icons/ai';
const BlockList = () => {
  // ============ redux data 
  const sliceUser =  useSelector((state)=> state.counter.value)

  // ============ custom state hooks
  const [blockList , setBlockList] = useState([])


  // ============ firebase variables
  const db = getDatabase();

  // ============ functions
  // ============ realtime database 
  useState(()=>{
    const starCountRef = ref(db, 'blockList/');
    onValue(starCountRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        if(item.val().currentUserId == sliceUser.uid){
          arr.push({...item.val() , key:item.key})
        }
      });
      setBlockList(arr)

    });
  } , [])

  const UNblocker = (info)=>{
    set(push(ref(db, 'friends/')), {
      SenderUserId: sliceUser.uid,
      SenderUsername: sliceUser.displayName,
      SenderUserImage: sliceUser.photoURL,
      FriendId: info.FriendId,
      FriendName: info.FriendName,
      FriendPhoto: info.FriendPhoto
    });
  }
  

  // currentUserId


  return (
    <>
           <div>
      <div className="">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-8 w-[250px]">Blocked People</h1>
      <div className="">
        

                  <div className="flex flex-col gap-6 p-3 rounded-xl">
                {
                          blockList.map((item)=>(
                          <div key={item.key} className="w-[250px] h-[60px] flex items-center bg-white p-4 rounded-lg border-[#37B7C3] border-2 duration-200 ">
                    <img
                      src={item.FriendPhoto}
                      alt="User 1"
                      className="w-12 h-12 object-cover rounded-full border-2 border-gray-300"
                      />
                    <div className="ml-4 flex-grow">
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white">{item.FriendName}</h3>
                    </div>
                      <button onClick={()=>UNblocker(item)} className="flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-full hover:bg-green-800 focus:outline-none">
            <AiOutlineUserAdd size={20} />
          </button>
                    
                      </div>
                      ))
                    }
                        </div>
                
            
          
        
        </div>
      </div>
    </div>
    </>
  )
}

export default BlockList