import React, { useEffect, useState } from 'react'
import { FiUserPlus } from 'react-icons/fi'; 
import { getDatabase, ref, onValue } from "firebase/database";

const UserComponents = () => {

  const [AllUser , setAllUser]= useState([])

  const db = getDatabase();

  useEffect(()=>{
    const starCountRef = ref(db, 'users/');
    onValue(starCountRef, (snapshot) => {
      let arrayData = []
      snapshot.forEach((item)=>{
        arrayData.push(item.val())
      })
      setAllUser(arrayData)
});
  },[])

  return (
    <>

      <h1 className="text-3xl font-bold text-gray-800 mb-8">Connect with others</h1>
      <div className="">
        
        {/* User 1 */}
        <div className="">
          {
            AllUser.map((item)=>(
              <div className="flex flex-col gap-4 p-3 rounded-xl">
                <div className="w-[350px] h-[60px] flex items-center bg-white p-4 rounded-lg border-[#37B7C3] border-2 hover:bg-[#6EACDA] duration-200 group">
          <img
            src={item.UserImage}
            alt="User 1"
            className="w-12 h-12 object-cover rounded-full border-2 border-gray-300"
            />
          <div className="ml-4 flex-grow">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white">{item.UserName}</h3>
            <p className="text-sm text-gray-500 group-hover:text-black">{item.UserEmail}</p>
          </div>
          <button className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none">
            <FiUserPlus size={20} />
          </button>
            </div>
              </div>
            ))
          }
          </div>
        </div>

    </>
  )
}

export default UserComponents
