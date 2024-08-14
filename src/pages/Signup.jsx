import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { serverapi } from "../main";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password, gender);

    try {
      const res = await axios.post(
        `${serverapi}/users/register`,
        { name, email, password, gender },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );

      console.log(res);
      navigate("/");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-5">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create Your Account
        </h1>

        <form method="post" onSubmit={handlesubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
              <input
                type="email"
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

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Gender
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>

          <div className="flex items-center justify-between mb-6">
            <p className="text-sm">
              Already have an account? <Link to="/login" className="text-blue-500 hover:text-blue-800">Login</Link>
            </p>
          </div>

          <div className="flex items-center justify-center">
            <input
              type="submit"
              value="Signup"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
