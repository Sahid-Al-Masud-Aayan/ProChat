import React from 'react'

const ChatsUsers = () => {
  return (
    <div>
<div className='w-[250px]'>
        <h2 className='text-xl font-bold text-black mb-5 text-center mt-5'>Friends</h2>
        
                      <div className="flex justify-center items-center hover:bg-gray-200 py-3">
                        <div className='flex justify-center items-center gap-5'> 
                          <div className=" bg-green-100 user_image w-[50px] h-[50px] rounded-full overflow-hidden">
                            <img src='' alt="user photo" />
                          </div>
                          <h2 className='text-lg font-semibold'>User</h2>
                        </div>
                      </div>
                      <div className="flex justify-center items-center hover:bg-gray-200 py-3">
                        <div className='flex justify-center items-center gap-5'> 
                          <div className=" bg-green-100 user_image w-[50px] h-[50px] rounded-full overflow-hidden">
                            <img src='' alt="user photo" />
                          </div>
                          <h2 className='text-lg font-semibold'>Reciever</h2>
                        </div>
                      </div>
              
             
    </div>
    </div>
  )
}

export default ChatsUsers
