import {createSlice} from "@reduxjs/toolkit";

const socketSlice=createSlice({
    name:"socket",
    initialState:{
        Socket:null
    },
    reducers:{
        setSocket:(state,action)=>{
            state.Socket=action.payload;
        }
    }
});

export const {setSocket}=socketSlice.actions;
export default socketSlice.reducer;