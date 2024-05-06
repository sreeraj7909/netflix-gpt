import React, { useState } from 'react'
import Header from './Header'
import { LOGIN_BG_LG } from '../utils/constants'

const Login = () => {
  const [isSignIn,setIsSignIn]=useState(true)
  const toggleTisgnInForm=()=>{
    setIsSignIn(!isSignIn)
  }
  return (
    <div className>
      <Header/>
       <div className='absolute '>
         <img alt='' src={LOGIN_BG_LG}/>
      </div>
      <form className='bg-black absolute w-3/12 p-12 my-36 m-auto right-0 left-0 text-white opacity-85 rounded-md '>
      
        <p className='font-bold text-3xl my-4'>{isSignIn ? "Sign in" :"Sign up"}</p>
        {!isSignIn && <input type='text' placeholder='Full Name' className='p-3 mx-1 my-3 rounded-md w-full bg-gray-700'/>}
          <input type='text' placeholder='Email or Mobile number' className='p-3 mx-1 my-3 rounded-md w-full bg-gray-700'/>
       
        <input type='text' placeholder='Password' className='p-3 mx-1 my-3 rounded-md w-full  bg-gray-700'/>
        <button className='p-3 mx-1  my-4 rounded-lg bg-red-600 w-full '>{isSignIn ? "Sign in" :"Sign up"}</button>
        <p className='p-1 m-2 cursor-pointer' onClick={toggleTisgnInForm}>{isSignIn ? "New to Netflix? Sign up now" :"Already a user? Sign in now"}</p>
      </form>
    </div>
  )
}

export default Login
