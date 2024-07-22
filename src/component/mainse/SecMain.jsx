import React, { useContext } from 'react'
import './SecMain.css'
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { HeroMain } from '../hero/HeroMain';
import { Cards } from '../CardsMain/Cards';
import { Input } from '../inputMain/Input';
import { Context } from '../../context/context';

export const SecMain = () => {
  const {onSent,prompt,hideScreen,loading,result,setinput,input}=useContext(Context)
  return (
    <div className='main'>
    <header className='header'>
      <h1>Scode</h1>
        <div className="media">
          <i><FaInstagram /></i>
          <i><FaSquareXTwitter /></i>
          <i><FaLinkedin /> </i>
        </div>
      </header>
      <HeroMain/>
      <Cards/>
      <div className='cont'>
      <Input/>
      </div>
      </div>
  )
}
