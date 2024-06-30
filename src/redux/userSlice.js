import {createSlice} from "@reduxjs/toolkit";

const userSlic=createSlice({
    name:"user",
    initialState:{
        isAuth:null,
        MyProfile:null,
        AllUser:null,
        selectedUser:null,
        online:null
    },
    reducers:{
        setAuthUser:(state,action)=>{
            state.isAuth=action.payload;
        },
        setMyProfile:(state,action)=>{
            state.MyProfile=action.payload
        },

        setLogoutUser:(state)=>{
            state.isAuth=null;
            state.MyProfile=null;
            state.AllUser=null;
        },

        setAllUsers:(state,action)=>{
            state.AllUser=action.payload;
        },
        setSelectedUser:(state,action)=>{
            state.selectedUser=action.payload;
        },
        setOnline:(state,action)=>{
            state.online=action.payload;
        }
    }
});

export const {setAuthUser,setMyProfile,setLogoutUser,setAllUsers,setSelectedUser,setOnline}=userSlic.actions;
export default userSlic.reducer