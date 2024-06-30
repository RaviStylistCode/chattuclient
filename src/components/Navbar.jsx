import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import {setLogoutUser} from "../redux/userSlice";
import {serverapi} from "../main"

const Navbar = () => {

  const data=useSelector(state=>state.user.isAuth);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const logouthandle=async()=>{
    try {
      axios.defaults.withCredentials=true;
      const res=await axios.get(`${serverapi}/users/logout`);
      alert(res.data.message)
      dispatch(setLogoutUser());
      navigate("/login")
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div className="navbar  bg-gray-400 m-3 rounded">
        <div className="flex-1 m-5 ">
          <a className="btn btn-ghost text-xl text-white">Welcome {data?.name}</a>
        </div>
        <div className="flex-none gap-2 justify-between ">
          {/* <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div> */}
          <div className="dropdown dropdown-end mr-5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full gap-2 ">
                <img src={data?.photo} alt="myprofile"  />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                {/* <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a> */}
                <Link to={"/me"}>profile</Link>
              </li>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <button className="btn btn-accent" onClick={logouthandle}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
