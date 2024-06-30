import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const GetOtherUsers = ({ user }) => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.user.selectedUser);
  const onlineUser=useSelector(store=>store.user.online);
  const isOnline=onlineUser.includes(user?._id);
  // console.log(data)
  const selectedUserhandler = (user) => {
    dispatch(setSelectedUser(user));
  };

  return (
    <div
      onClick={() => selectedUserhandler(user)}
      className={` ${
        data?._id === user?._id ? "bg-white" : ""
      } w-full h-[80px] bg-gray-400 rounded-md flex items-center  gap-5 p-1 m-2 cursor-pointer hover:bg-white border-b-4`}
    >
      <div className={`avatar ${isOnline?'online':''}`}>
        <div className="w-12 rounded-full">
          <img
            src={user?.photo}
            alt="imguser"
            className="w-[70px]  rounded-full bg-black "
          />
        </div>
      </div>
      <div>
        <div>
          <p className="text-2xl text-yellow-400 font-bold">{user?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default GetOtherUsers;
