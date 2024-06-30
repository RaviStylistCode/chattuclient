import React from "react";
import OtherUsers from "./OtherUsers";

const UserSide = () => {
  return (
    <>
      <div className=" w-full sm:w-96 h-[200px]  sm:h-full bg-rose-500 flex flex-col sm:flex-col">
        <div className="w-full p-2 flex flex-row border-b-4 gap-2">
          <input
            type="text"
            placeholder="search users"
            className="input flex"
          />
          <button className="btn btn-accent hover:text-white">sch</button>
        </div>
        <div className="w-full h-full overflow-x-auto overflow-y-hidden sm:overflow-auto">
            <OtherUsers/>
           
        </div>
      </div>
    </>
  );
};

export default UserSide;
