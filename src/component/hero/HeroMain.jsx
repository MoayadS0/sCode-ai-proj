import React, { useContext, useRef, useState } from 'react'
import './HeroMain.css'
import { Context } from '../../context/context'
import { FaRegUser } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import anime from '../../assets/anime.jpeg'

export const HeroMain = () => {

  const [seen,setseen]=useState('Send')
 const[clear,setclear]=useState('')
  const see=()=>{
    setseen('sent !')
    setclear('');
  }
  const {onSent,prompt,hideScreen,loading,result,setinput,input}=useContext(Context)
  return (
    <>
    {!hideScreen?   <><div className="hero-father">
     <div className="intro">
        <p>Your Thought</p>
        <p>Will Be Answered</p>
      <h5>It is still in the development stage, if you have any opinions to give, you can write me a message:</h5>
      </div>
      <div className="email">
        <input type="text" className="link" value={clear} placeholder='Your Message' onChange={(e)=>setclear(e.target.value)} />
        <button className="btn2"onClick={see
       
        }>{seen}</button>
        
      </div>
      </div></>:
      
      <div className='chat-container'>
        <div className="user-chat">
        <img className='user' src={anime} alt="user"/>
          <p className="user-ques">{prompt}</p>
        </div>
        <div className="ai-chat">
          <i className="ai-pic"><FaCode /></i>
          {loading? <div className='load'><hr />
          <hr />
          <hr /> 
          </div> 
          : <p className="ai-answer" dangerouslySetInnerHTML={{__html:result}}></p> }
         
        </div>
        </div>}
  
    </>
  )
}
