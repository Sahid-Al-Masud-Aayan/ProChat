import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Friends = () => {


    const ReduxUserData = useSelector((state)=>state.counter.value)
 
  

    const [AllFreinds , setAllFreinds]= useState([])
  
    const db = getDatabase();
  
    useEffect(()=>{
      const starCountRef = ref(db, 'friends/');
      onValue(starCountRef, (snapshot) => {
        let arrayData = []
        snapshot.forEach((item)=>{
            arrayData.push({...item.val(), key: item.key})
        })
        setAllFreinds(arrayData)
  });
    },[])


  return (
    <div>
             <h1 className="text-3xl font-bold text-gray-800 mb-8">Friends</h1>
            <div className="flex flex-col gap-6 p-3 rounded-xl">
                {
                          AllFreinds.map((item)=>(
                          <div key={item.key} className="w-[350px] h-[60px] flex items-center bg-white p-4 rounded-lg border-[#37B7C3] border-2 duration-200 ">
                    <img
                      src={item.friendPhoto}
                      alt="User 1"
                      className="w-12 h-12 object-cover rounded-full border-2 border-gray-300"
                      />
                    <div className="ml-4 flex-grow">
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white">{item.friendName}</h3>
                      
                    </div>
                   
                      </div>
                      ))
                    }
                        </div>
            
          
        
        
    </div>
  )
}

export default Friends
