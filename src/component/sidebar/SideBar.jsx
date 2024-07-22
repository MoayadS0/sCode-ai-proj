import React, { useContext, useState } from 'react'
import './SideBar.css'
import { FaBars } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { Context } from '../../context/context';

export const SideBar = () => {
  const[extend,setextent]=useState(false)

  const {onSent,setprompt,recent,newchat}=useContext(Context)

  const prevRecent=async(prompt)=>{
    setprompt(prompt)
    await onSent(prompt)
  }

  return (
    <>
    <div className='sidebar'>
      <div className='top-side'>
        <i className='menu' onClick={()=>setextent(prev=>!prev)}>
    
    <FaBars/></i>
        <div className="creating">
        <button className='btn'>+</button>
        {extend?<i className='text' onClick={()=>newchat()}>new chat</i>:null}
        </div>
       
        {extend?
         <div className='recent-sec' >
        <p className='rec'>Recent</p>
        {recent.map((item,index)=>{
          return(
             <div className="old-chat" onClick={()=>prevRecent(item)}>
        <FaMessage />
        <p>{item.slice(0,16)} ...</p>
        </div>
          )
        })}
       
        </div>:null}
      </div>
      <div className="activity">
        <div className='sec'>
           <FaCircleQuestion className='icon'/>
           {extend?<i>Help</i>:null}
        </div>
      <div className='sec'>
         <FaGear className='icon'/>
         {extend?<i>Setting</i>:null}
      </div>
      </div>
      
    </div>

    </>
  )
}
