import React from "react";
// import { Link } from "react-router-dom";
import UserSide from "./UserSide";
import ChatSide from "./ChatSide";

const Home = () => {
  return (
    <>
     

      {/* chat area */}
      <div className="w-full h-auto sm:h-[100vh] bg-slate-400 m-3 rounded flex flex-col sm:flex-row items-center gap-3 p-5 stick mt-[70px]">
        <UserSide/>
        <ChatSide/>

      </div>

      {/* <Link to={"/me"}>myProfile</Link> */}

     
    </>
  );
};

export default Home;
