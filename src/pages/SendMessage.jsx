import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";
import {serverapi} from "../main"

const SendMessage = () => {
  const selectedUser = useSelector((store) => store.user.selectedUser);
  const messages=useSelector(store=>store.message.messages);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const messagehandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${serverapi}/messages/send/${selectedUser?._id}`,
        { message },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      // console.log(res);
      dispatch(setMessages([...messages, res?.data?.newMessage]));
    } catch (error) {
      console.log(error);
    }
    setMessage("");
  };
  return (
    <div className="w-full ">
      <form onSubmit={messagehandler}>
        <div className=" w-full flex justify-center items-center p-2 gap-4">
          <input
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="send messages"
            className="input input-bordered w-[80%]"
          />
          <button type="submit" className="btn btn-primary">
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
