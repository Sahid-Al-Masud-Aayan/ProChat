import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, remove, set, push } from "firebase/database";
import { AiOutlineCheck, AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { SliceUserChat } from '../Slices/SliceForChat'
import { useNavigate } from 'react-router-dom';

const ChatsUsers = () => {

  // const ChatsUser = useSelector((state)=>state.UserChat.ChatUserSlice)
  // const navigator = useNavigate()

  // useEffect(()=>{
  //   if(ChatsUser == null){
  //     navigator('/no-friends')
  //   }
  // },[])

  const ReduxUserData = useSelector((state) => state.counter.value);
  const dispatcher = useDispatch();

  const [AllFreinds, setAllFreinds] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const db = getDatabase();

  useEffect(() => {
    const starCountRef = ref(db, "friends/");
    onValue(starCountRef, (snapshot) => {
      let arrayData = [];
      snapshot.forEach((item) => {
        if (item.val().currentUserId === ReduxUserData.uid) {
          arrayData.push({
            FriendId: item.val().friendId,
            FriendName: item.val().friendName,
            FriendPhoto: item.val().friendPhoto,
            key: item.key,
          });
        } else if (item.val().friendId === ReduxUserData.uid) {
          arrayData.push({
            FriendId: item.val().currentUserId,
            FriendName: item.val().currentUserName,
            FriendPhoto: item.val().currentUserPhoto,
            key: item.key,
          });
        }
      });
      setAllFreinds(arrayData);
      setLoading(false);
    });
  }, [ReduxUserData.uid]);

  const BlockUser = (data) => {
    set(push(ref(db, "blockList/")), {
      currentUserId: ReduxUserData.uid,
      currentUserName: ReduxUserData.displayName,
      currentUserPhoto: ReduxUserData.photoURL,
      FriendId: data.FriendId,
      FriendName: data.FriendName,
      FriendPhoto: data.FriendPhoto,
    });
    remove(ref(db, "friends/" + data.key));
  };

  const sentdatatoredux = (UserChatData) => {
    dispatcher(SliceUserChat(UserChatData));
    localStorage.setItem("UserInformetion", JSON.stringify(UserChatData));
  };
  return (
    <div className='w-[250px]'>
      <h2 className='text-xl font-bold text-black mb-5 text-center mt-5'>Friends</h2>
      {loading ? (
        <div className='text-center'>Loading...</div>
      ) : (
        AllFreinds.length === 0 ? (
          <div className='text-center'>No friends found</div>
        ) : (
          AllFreinds.map((item) => (
            <div
            onClick={() => sentdatatoredux(item)}
            key={item.key}
            className="flex pl-5 items-center hover:bg-gray-200 py-3 cursor-pointer"
            >
              
              <div className='flex justify-center items-center gap-5'> 
                <img
                  src={item?.FriendPhoto || 'default-avatar.png'}
                  className='w-[50px] h-[50px] rounded-full object-cover'
                  alt="user photo"
                />
                <h2 className='text-lg font-semibold'>{item?.FriendName}</h2>
              </div>
            </div>
          ))
        )
      )}
    </div>
  );
};

export default ChatsUsers;
