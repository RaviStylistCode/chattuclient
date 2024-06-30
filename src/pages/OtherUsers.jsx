import React from "react";
import GetOtherUsers from "./GetOtherUsers";
import GetallUsers from "../Hooks/GetallUsers";
import { useSelector } from "react-redux";

const OtherUsers = () => {
  GetallUsers();
  const data=useSelector(store=>store.user.AllUser);
  // console.log(data)
  return (
    <div className="p-3 flex flex-row h-[200px] sm:flex-col ">
      {
        data?.map((user)=>{
          return(
            <GetOtherUsers key={user._id} user={user}/>

          )
        })
      }
     
    

    </div>
  );
};

export default OtherUsers;
