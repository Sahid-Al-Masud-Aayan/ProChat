import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue, remove, set, push } from "firebase/database";
import { AiOutlineCheck, AiOutlineDelete } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const FriendRequest = () => {

  const majorUserData = useSelector((state)=>state.counter.value)


    const [requestfriend, setFriendRequest]= useState([])
    const db = getDatabase();
    useEffect(()=>{
        const starCountRef = ref(db, 'addfriend/');
              onValue(starCountRef, (snapshot) => {
                let arrayData = []
                snapshot.forEach((item)=>{
                  if(item.val().SenderUserId == majorUserData.uid){
                    arrayData.push({...item.val(), key: item.key})
                    }
                })
                setFriendRequest(arrayData)
});
    },[])

    const confirmButton = (e)=>{
      // ================ seting data to friends collection 
      set(push(ref(db, 'friends/')), {
        currentUserId: majorUserData.uid ,
        currentUserName: majorUserData.displayName ,
        currentUserPhoto: majorUserData.photoURL ,
        friendId: e.RecieverId,
        friendName: e.RecieverUserName, 
        friendPhoto: e.RecieverUserImage,
      });
      // ============== remove data from the friendRequest collection 
      remove(ref(db, "addfriend/"+ e.key))

    }
    const deleteButton = (e)=>{
      remove(ref(db, "addfriend/"+ e.key))
    }

    return (
    <div>
      <div className="">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Friend Requests</h1>
      <div className="">
        

                  <div className="flex flex-col gap-6 p-3 rounded-xl">
                {
                          requestfriend.map((item)=>(
                          <div key={item.key} className="w-[350px] h-[60px] flex items-center bg-white p-4 rounded-lg border-[#37B7C3] border-2 duration-200 ">
                    <img
                      src={item.RecieverUserImage}
                      alt="User 1"
                      className="w-12 h-12 object-cover rounded-full border-2 border-gray-300"
                      />
                    <div className="ml-4 flex-grow">
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white">{item.RecieverUserName}</h3>
                      
                    </div>
                    <div className="flex space-x-4">
      {/* Confirm Button */}
      <button onClick={()=>confirmButton(item)} className="flex items-center px-2 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600">
        <AiOutlineCheck />
        <span></span>
      </button>

      {/* Delete Button */}
      <button onClick={()=>deleteButton(item)} className="flex items-center px-2 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600">
        <AiOutlineDelete />
        <span></span>
      </button>
    </div>
                      </div>
                      ))
                    }
                        </div>
                
            
          
        
        </div>
      </div>
    </div>
  )
}

export default FriendRequest
