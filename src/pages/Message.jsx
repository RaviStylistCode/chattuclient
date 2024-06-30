import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Message = ({ message }) => {
  const isAuthUser = useSelector((store) => store.user.isAuth);
  const selectedUser = useSelector((store) => store.user.selectedUser);
  const scroll = useRef();

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div
      ref={scroll}
      className={`chat ${
        isAuthUser?._id === message?.senderId ? "chat-end" : "chat-start"
      }  p-5`}
    >
      <div className="chat-image avatar ">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={
              message?.senderId === isAuthUser?._id
                ? isAuthUser?.photo
                : selectedUser?.photo
            }
          />
        </div>
      </div>
      <div className="chat-header">
        {/* Anakin */}
        <time className="text-xs opacity-50">{/* <p>12:54</p> */}</time>
      </div>
      <div
        className={`chat-bubble  font-bold ${
          isAuthUser?._id !== message?.senderId
            ? "bg-white text-black font-bold"
            : "bg-blue-500"
        }`}
      >
        {message?.message}
      </div>
      {/* <div className="chat-footer opacity-50">
    Seen at 12:46
  </div> */}
    </div>
  );
};

export default Message;
