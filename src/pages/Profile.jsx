import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import {setMyProfile} from "../redux/userSlice";
import {serverapi} from "../main"

const Profile = () => {
    const dispatch=useDispatch();
    const data=useSelector(state=>state.user.MyProfile);
    // console.log(data)

    const myprofile=async()=>{
        try {
            axios.defaults.withCredentials=true;
            const res=await axios.get(`${serverapi}/users/myprofile`);
            // console.log(res)
            dispatch(setMyProfile(res.data.user));

            
        } catch (error) {
            console.log(error.response.data.message)
            
        }
    }

    useEffect(()=>{
        myprofile()
    },[]);
  return (
    <>
    <div className='w-full h-[100vh] flex justify-center items-center bg-red-300'>
        <div className='w-1/2 h-[70vh] bg-cyan-300  items-center'>
        <h1 className='text-3xl font-bold text-center items-center text-gray-400 underline'>My Profile</h1>
        <img src={data?.photo} className='w-45 h-[200px] flex justify-center items-center ml-10 mt-4' alt="myimg" />
        <h3>Name : {data?.name}</h3>
        <p>email : {data?.email}</p>
        <span>Gender : {data?.gender}</span>

        </div>

    </div>
    </>
  )
}

export default Profile