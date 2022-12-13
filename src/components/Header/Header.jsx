import React from 'react'
import "./Header.css"
import Admin from "../../assets/Admin.svg"
import VectorDown from "../../assets/VectorDown.svg"

export const Header = () => {
  return (
    <div className='customHeader w-full h-min pb-2'>
      <div className='right flex flex-row justify-end items-center gap-5 pr-11 pt-3'>
        <div className='w-8 h-8 flex items-center justify-center rounded-full bg-white'>
          <img src={Admin}></img>
        </div>
        <h2>ადმინისტრატორი</h2>
        <img src={VectorDown}></img>
      </div>
    </div>
  )
}

