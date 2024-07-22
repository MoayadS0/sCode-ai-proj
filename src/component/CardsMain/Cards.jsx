import React, { useContext } from 'react'
import './Cards.css'
import { FaCode } from "react-icons/fa6";
import { FaCalculator } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Context } from '../../context/context';

export const Cards = () => {
  const {onSent,prompt,hideScreen,loading,result,setinput,input}=useContext(Context)
  return (
    <>
    {!hideScreen?   <><div className="container">
      <div className="card">
        <i className="card-icon"><FaCode /></i>
        <p className="title">About technology</p>
        <p className="question">What is the latest technology in 20s?</p>
      </div>
      <div className="card">
        <i className="card-icon"><FaCalculator />
        </i>
        <p className="title">About math</p>
        <p className="question">have a difficult question to solve?</p>
      </div>
      <div className="card">
        <i className="card-icon"><FaMagnifyingGlass /></i>
        <p className="title">About life</p>
        <p className="question">What's the cabital of japan?</p>
      </div>
    </div></>:null}
   
    </>
  )
}
