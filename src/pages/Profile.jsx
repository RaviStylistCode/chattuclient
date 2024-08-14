import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setMyProfile } from '../redux/userSlice';
import { serverapi } from '../main';

const Profile = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.MyProfile);

  const myprofile = async () => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.get(`${serverapi}/users/myprofile`);
      dispatch(setMyProfile(res.data.user));
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    myprofile();
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 relative overflow-hidden">
      {/* Animated Bubbles */}
      <div className="absolute inset-0">
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
        <div className="bubble bubble4"></div>
        <div className="bubble bubble5"></div>
      </div>

      <div className="relative z-10 w-full md:w-2/3 lg:w-1/2 bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
        <h1 className="text-4xl font-bold text-center text-gray-700 mb-6 underline">
          My Profile
        </h1>
        <div className="flex justify-center mb-6">
          <img
            src={data?.photo}
            className="w-48 h-48 rounded-full shadow-md border-4 border-white transition duration-300 hover:opacity-90"
            alt="myimg"
          />
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Name: {data?.name}
          </h3>
          <p className="text-lg text-gray-600 mb-2">Email: {data?.email}</p>
          <span className="text-lg text-gray-600">Gender: {data?.gender}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
