import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ImBlocked } from "react-icons/im";

const Friends = () => {
  const ReduxUserData = useSelector((state) => state.counter.value);

  const [AllFreinds, setAllFreinds] = useState([]);

  const db = getDatabase();

  useEffect(() => {
    const starCountRef = ref(db, "friends/");
    onValue(starCountRef, (snapshot) => {
      let arrayData = [];
      snapshot.forEach((item) => {
        if (item.val().currentUserId == ReduxUserData.uid) {
          arrayData.push({
            FriendId: item.val().friendId,
            FriendName: item.val().friendName,
            FriendPhoto: item.val().friendPhoto,
            key: item.key,
          });
        } else if (item.val().friendId == ReduxUserData.uid) {
          arrayData.push({
            FriendId: item.val().currentUserId,
            FriendName: item.val().currentUserName,
            FriendPhoto: item.val().currentUserPhoto,
            key: item.key,
          });
        }
      });
      setAllFreinds(arrayData);
    });
  }, []);

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
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8 w-[250px]">
        Friends
      </h1>
      <div className="flex flex-col gap-6 p-3 rounded-xl">
        {AllFreinds.map((item) => (
          <div
            key={item.key}
            className="w-[250px] h-[60px] flex items-center bg-white p-4 rounded-lg shadow-[0px_8px_20px_10px_#00000024]  duration-200 "
          >
            <img
              src={item.FriendPhoto}
              alt="User 1"
              className="w-12 h-12 object-cover rounded-full border-2 border-gray-300"
            />
            <div className="ml-4 flex-grow">
              <h3 className="text-lg font-semibold text-gray-800 ">
                {item.FriendName}
              </h3>
            </div>
            <button
              onClick={()=>BlockUser(item)}
              className="text-xl text-red-600 hover:text-red-900"
            >
              <ImBlocked />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
