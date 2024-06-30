import axios from 'axios'
import React, { useEffect } from 'react'
import {useDispatch} from "react-redux"
import { setAllUsers } from '../redux/userSlice';
import {serverapi} from "../main"

const GetallUsers = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        const getalluser=async()=>{
           try {
            axios.defaults.withCredentials=true;
            const res=await axios.get(`${serverapi}/users/all/user`);
            // console.log(res)
            dispatch(setAllUsers(res.data.user))
            
           } catch (error) {
            console.log(error.response.data.message);
           }
        }
        getalluser();
    },[]);
  
}

export default GetallUsers