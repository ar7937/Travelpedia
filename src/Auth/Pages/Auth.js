import React from 'react'
import SignUp from '../Components/SignUp'
import './Auth.css'
import Button from '../../shared/Components/Button'
import Login from '../Components/Login'
import { useState } from 'react'
const Auth = () => { 
  const [toggle,setToggle]=useState(false)
  const onClicksignUp=()=>{
   setToggle(true)
  }
  const onClick=()=>{
    setToggle(false)
  }
  return (
    <div className='div-auth'>
      <ul>
        <li><Button info="Sign In" class="signin-btn" openModel={onClicksignUp}></Button></li>
        <li><Button info="Login In" class="login-btn" openModel={onClick}></Button></li>
      </ul><br/><br/>
    
     {toggle ?<SignUp/>:<Login/>}
      
    </div>
  )
}

export default Auth