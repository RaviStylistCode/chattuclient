import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {setMessages} from "../redux/messageSlice";
import {serverapi} from "../main";

const getallMessages = () => {
  const selectedUser = useSelector((store) => store.user.selectedUser);
  const dispatch=useDispatch();

  const fetchallmessages = async () => {
    try {
        axios.defaults.withCredentials=true;
      const res = await axios.get(
        `${serverapi}/messages/getmessage/${selectedUser?._id}`
      );
      dispatch(setMessages(res.data.message))
    //   console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchallmessages();
  }, [selectedUser,setMessages]);
};

export default getallMessages;
