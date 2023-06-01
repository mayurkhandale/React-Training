import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import UserData from './UserData.tsx';
import { getUserList } from '../redux/asyncActions/userAsyncAction.js';

import ThunkApiTable from './ThunkApiTable.js';
export default function Contact() {
  const dispatch=useDispatch()
  const state = useSelector((state) => {
    return state["employees"]
})  

const store=useSelector((state)=>{
    return state['users']
})

console.log(store,'1616')



// useEffect(()=>{
//   dispatch(getUserList())
// })
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Using Thunk Redux toolkit Api call</h1>
      <UserData/>
      <ThunkApiTable/>
      </div>
  )
}
