import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import UserData from './UserData.tsx';
import { getUserList } from '../redux/asyncActions/userAsyncAction.js';
export default function Contact() {
  const dispatch=useDispatch()
  const state = useSelector((state) => {
    return state["employees"]
})  

const userState=useSelector((state)=>{
    return state['users']
})


console.log(userState,'1616')
useEffect(()=>{
  dispatch(getUserList())
})
  return (
    <div><UserData/></div>
  )
}
