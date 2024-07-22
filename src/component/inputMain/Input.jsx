import React, { useContext, useState } from 'react'
import './Input.css'
import { FaPaperPlane } from "react-icons/fa6";
import { Context } from '../../context/context';

export const Input = () => {
  const {onSent,prompt,hideScreen,loading,result,setinput,input}=useContext(Context)
  
  return (
    <>
    <div className="input-container">
      
      <input type="text" className="mes" placeholder='Write a message' onChange={(e)=>setinput(e.target.value)} value={input} />
        
      <i className="send" onClick={()=>onSent()}><FaPaperPlane /></i>
    </div>
    </>
  )
}
