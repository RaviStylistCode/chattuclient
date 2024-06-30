import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import {serverapi} from "../main"

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password, gender);

    try {
      const res = await axios.post(
        `${serverapi}/users/register`,
        { name, email, password, gender },
        {
            headers:{
                'Content-Type':'application/json'
            },
            withCredentials:true
        }
      );

      console.log(res)
      Navigate("/");
    } catch (error) {
        console.log(error.response.data.message)
    }
  };
  return (
    <div className="w-full h-[100vh] flex justify-center align-middle items-center m-5 p-2 bg-rose-400">
      <div className="w-120 items-center  bg-accent gap-3 flex-2">
        <h1 className="text-2xl text-center font-bold text-gray-300">
          Create Your Account
        </h1>

        <form method="post" onSubmit={handlesubmit}>
          <div className="flex flex-col gap-3 p-2">
            <label htmlFor="" className="flex flex-col sm:flex-row gap-3 ">
              <span className="text-2xl text-gray-200">Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-96"
                placeholder="enter your name"
              />
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 p-2">
            <label htmlFor="" className="flex flex-col sm:flex-row gap-3 ">
              <span className="text-2xl text-gray-200">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-96"
                placeholder="enter your email"
              />
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 p-2">
            <label htmlFor="" className="flex flex-col sm:flex-row gap-3 ">
              <span className="text-2xl text-gray-200">Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-96"
                placeholder="enter your password"
              />
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 p-2">
            <label htmlFor="" className="flex flex-col sm:flex-row gap-3 ">
              <span className="text-2xl text-gray-200">Gender</span>
              <select
                className="w-96"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="0">.....</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
          </div>

          <div>
            <p>
              Already have an account ? <Link to={"/login"}>Login</Link>{" "}
            </p>
          </div>

          <div className="flex-1">
            <label htmlFor="" className="items-center ">
              <input
                type="submit"
                value="Signup"
                className="input input-bordered w-96 cursor-pointer"
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
