import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setAuthUser } from '../redux/userSlice';
import { serverapi } from "../main";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${serverapi}/users/login`, { email, password }, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      dispatch(setAuthUser(res.data.user));
      if (res.data.success) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-5">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Welcome, Please Login</h1>
        <form method='post' onSubmit={handlesubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
              />
            </label>
          </div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm">Don't have an account? <Link to="/register" className="text-blue-500 hover:text-blue-800">Register</Link></p>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="submit"
              value="Login"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
