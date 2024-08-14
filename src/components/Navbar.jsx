import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLogoutUser } from "../redux/userSlice";
import { serverapi } from "../main";

const Navbar = () => {
  const data = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logouthandle = async () => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.get(`${serverapi}/users/logout`);
      alert(res.data.message);
      dispatch(setLogoutUser());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
      <div className="navbar max-w-7xl mx-auto px-4 py-2">
        <div className="flex-1">
          <a className="text-2xl text-white font-bold">
            Welcome {data?.name}
          </a>
        </div>
        <div className="flex-none gap-4">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full border-2 border-white">
                <img src={data?.photo} alt="myprofile" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu dropdown-content bg-white rounded-lg w-52"
            >
              <li>
                <Link to={"/me"} className="hover:bg-gray-100">
                  Profile
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:bg-gray-100">
                  Home
                </Link>
              </li>
              <li>
                <button
                  className="btn btn-accent w-full mt-2"
                  onClick={logouthandle}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
