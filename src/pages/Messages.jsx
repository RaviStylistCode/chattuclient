import React from 'react'
import Message from './Message'
import SendMessage from './SendMessage'
import getallMessages from '../Hooks/getallMessages'
import {useSelector} from "react-redux"
import useGetRealTimeMessage from '../Hooks/useGetRealTimeMessage'


const Messages = () => {
  const message=useSelector(store=>store.message.messages);
  getallMessages();
  useGetRealTimeMessage();
  return (
    <div className='w-full h-full bg-red-800 flex flex-col gap-2 p-1 '>

        <div className='w-full h-[80%] bg-gray-500 rounded-md overflow-auto'>
          {
            message?.map((message)=>{
              return(

                <Message key={message?._id} message={message}/>
              )
            })
          }
           
           
        </div>

        <div className='w-full h-[15%] bg-yellow-300 rounded-md'>
            <SendMessage/>
        </div>

    </div>
  )
}

export default Messages