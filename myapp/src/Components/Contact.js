import React from 'react'
import { useSelector } from 'react-redux'
export default function Contact() {

  const state = useSelector((state) => {
    return state["employees"]
})  
  return (
    <div>Contact {state.name}</div>
  )
}
