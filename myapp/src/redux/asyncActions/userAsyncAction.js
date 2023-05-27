import {getUserListStarted,getUserListSuccess,getUserListFailure} from  './userAction';

// get UserList Api 
const url='https://jsonplaceholder.typicode.com/posts'
export const getUserList=()=> async dispatch=>{
  dispatch(getUserListStarted());
  try{
      const res=await fetch(url)
      const data=await res.json();
      console.log(data,'1010')
      dispatch(getUserListSuccess(data))
    // dispatch({ type: '', payload: response.data });
  }
  catch(error){
    dispatch(getUserListSuccess(error))

  }
}