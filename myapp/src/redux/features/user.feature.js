import {createSlice} from '@reduxjs/toolkit';



const initialState={
    user:[],
    name:"mayur"
}

const userSlice=createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        userData:function(state,action){
          console.log(state,'1515')
        }

    }

})
export const {userData}=userSlice.actions
export default userSlice.reducer