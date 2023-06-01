import {GET_USER_LIST_STARTED,GET_USER_LIST_SUCCESS,GET_USER_LIST_FAILURE} from './actionType';

 export const getUserListStarted=()=>{
    return {
        type:GET_USER_LIST_STARTED
    }

 }

 export const getUserListSuccess=(data)=>{
    console.log(data,'store')
    return {
        type:GET_USER_LIST_SUCCESS,
        payload:{
           data
        }
    }

 }

 export  const getUserListFailure=(error)=>{
    return({
        type:GET_USER_LIST_FAILURE,
        payload:{
            error
        }
    })
 }