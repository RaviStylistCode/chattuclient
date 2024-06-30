import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch} from "react-redux"
import { setAuthUser } from '../redux/userSlice'
import {serverapi} from "../main"


const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const handlesubmit=async(e)=>{
        e.preventDefault();
        // console.log(email,password);
       try {
        const res=await axios.post(`${serverapi}/users/login`,{email,password},{
            headers:{
                'Content-Type':'application/json'
            },
            withCredentials:true
        });
        // alert(res.data.message);
        // console.log(res)
        dispatch(setAuthUser(res.data.user));
        if(res.data.success){
            navigate("/");
        }
        
       } catch (error) {
        // alert(error.response.data.message)
        console.log(error)
        
       }

    }
  return (
    <div className="w-full h-[100vh] flex justify-center align-middle items-center m-5 p-2 bg-rose-400">

    <div className="w-120 items-center  bg-accent gap-3 flex-2">
        <h1 className="text-2xl text-center font-bold text-gray-300">Welcome , Please Login Here</h1>
         
         <form method='post' onSubmit={handlesubmit}>
    
    
            <div className="flex flex-col sm:flex-row gap-3 p-2">
                <label htmlFor="" className="flex flex-col sm:flex-row gap-3 ">
                    <span className="text-2xl text-gray-200">Email</span>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="input input-bordered w-96" placeholder="enter your name" />
                </label>
            </div>
    
            <div className="flex flex-col sm:flex-row gap-3 p-2">
                <label htmlFor="" className="flex flex-col sm:flex-row gap-3 ">
                    <span className="text-2xl text-gray-200">Password</span>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input input-bordered w-96" placeholder="enter your name" />
                </label>
            </div>
    
            
    
            <div>
                <p>Don't have an account ? <Link to={"/register"}>Register</Link> </p>
            </div>
    
            <div className="flex-1">
                <label htmlFor="" className="items-center ">
                    <input type="submit" value="Login" className="input input-bordered w-96 flex-1 cursor-pointer"  />
                </label>
            </div>
    
            
         </form>
        
       </div>
    
        </div>
  )
}

export default Login