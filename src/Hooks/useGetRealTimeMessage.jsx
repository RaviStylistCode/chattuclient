
import {useDispatch,useSelector} from "react-redux";
import {setMessages} from "../redux/messageSlice";
import { useEffect } from "react";
const useGetRealTimeMessage = () => {
    const messages=useSelector(store=>store.message.messages)
    const Socket=useSelector(store=>store.socket.Socket);
    const dispatch=useDispatch();

    useEffect(()=>{
        Socket?.on("newMessage",(newMessage)=>{
            dispatch(setMessages([...messages,newMessage]));
        })
    },[setMessages,messages,Socket]);
}

export default useGetRealTimeMessage