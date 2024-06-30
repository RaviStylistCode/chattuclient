import React from "react";
import { useSelector } from "react-redux";
import Messages from "./Messages";

const ChatSide = () => {
  const data = useSelector((store) => store.user.selectedUser);
  const isAuth = useSelector((store) => store.user.isAuth);
  const onlineUser=useSelector(store=>store.user.online);
  const isOnline=onlineUser.includes(data?._id);
  return (
    <>
      {
        data === null ?
        (
          <div className="w-full h-full bg-gray-400 flex flex-col justify-center items-center">
            <h3 className="text-yellow-400 font-bold text-5xl p-3">Hello ,  {isAuth?.name}</h3>
            <h1 className="text-white font-bold text-3xl p-2">Let's start Conversation</h1>
          </div>
        ):
        (
          <div className="w-full h-full bg-cyan-400 p-5 flex flex-col gap-2">
        <div className="w-full h-[100px] bg-gray-400 flex flex-row gap-2 items-center p-4">
          <div className={`avatar ${isOnline?'online':''}`}>
            <div className=" w-12 rounded-full">
              <img
                src={data?.photo}
                className="w-15 h-[80px] rounded-full bg-black"
                alt="userimage"
              />
            </div>
          </div>
          <h1 className="text-3xl text-white font-bold">{data?.name}</h1>
        </div>
       <div className="w-full h-[500px] sm:h-[100vh] overflow-hidden">
      <Messages/>
       </div>
      </div>
        )
      }
    </>
  );
};

export default ChatSide;
