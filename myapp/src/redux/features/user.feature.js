import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import {GET_USER_LIST_FAILURE,GET_USER_LIST_SUCCESS,GET_USER_LIST_STARTED} from '../asyncActions/actionType'


export const getPost=createAsyncThunk(
    'posts/getposts',
    async(args,{dispatch,getState})=>{
        return fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())
    }
)

const initialState={
    user:[],
    name:"mayur",
    status:null
}

const userSlice=createSlice({
    name:'user',
    initialState:initialState,
    extraReducers:{
        [getPost.pending]:(state,action)=>{
         state.status='loading'
        },
        [getPost.fulfilled]:(state,action)=>{
            state.user=action.payload
            state.status='success'
        },
        [getPost.rejected]:(state,action)=>{
            state.status='failed'
        }
    }
    // reducers:{
    //     userData:function(state=initialState,action){
    //       console.log(state,'1515')
    //       switch (action.type){
    //         case GET_USER_LIST_STARTED:
    //             console.log(action.payload,'111')
    //             return{
    //                 ...state
    //             }
    //         case GET_USER_LIST_SUCCESS:
    //             console.log(action.payload,'222')
    //             return{
    //                 ...state
    //             }  
    //         case GET_USER_LIST_FAILURE:
    //             console.log(action.payload,'333')
    //             return{
    //                 ...state,

    //             }     
    //       }
    //     }

    // }

})
export const {userData}=userSlice.actions
export default userSlice.reducer