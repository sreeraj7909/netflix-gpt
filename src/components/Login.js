import React, { useRef, useState } from 'react'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import Header from './Header'
import { LOGIN_BG_LG } from '../utils/constants'
import { checkValidateData } from '../utils/validate'
import {auth} from "../utils/firebase"

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const dispatch=useDispatch()
  
  const [isSignIn,setIsSignIn]=useState(true)
  const [errMessage,setErrMessage]=useState(null)
  const toggleTisgnInForm=()=>{
    setIsSignIn(!isSignIn)
  }
  const email=useRef(null)
  const password=useRef(null)
  const name=useRef(null)
  // const name=useRef(null)
  const handeleBottonClick=()=>{
    //validate form
    
   const message= checkValidateData(email.current.value,password.current.value)
   setErrMessage(message)
    if(message) return;
    //sign in sign up logic

    if(!isSignIn){
     createUserWithEmailAndPassword(auth,
     email.current.value,password.current.value)
     .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, 
      
    }).then(() => {
      const {uid,email,displayName} = auth.currentUser;
      console.log("Updating")
      dispatch(addUser({uid:uid,email:email,displayName:displayName}))
      console.log(auth.currentUser.displayName)
      
      // Profile updated!
      // ...
    }).catch((error) => {
      setErrMessage(error.message)
      // An error occurred
      // ...
    });
    console.log(user)
    
    
    // ...
  })
  .catch((error) => {
    
    setErrMessage("Email or password is incorrect")

    console.log(errMessage)
    // ..
  });


    }else{
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
    // Signed in 
       const user = userCredential.user;
       console.log(user)
       
      
       
    // ...
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errMessage)
    setErrMessage(errorMessage+"-"+errorCode)
  });

    }
   
    
  }
  return (
    <div className>
      <Header/>
       <div className='absolute '>
         <img className='h-screen object-cover md:w-screen' alt='' src={LOGIN_BG_LG}/>
      </div>
      <form className='bg-black absolute w-full md:w-3/12 p-12 my-36 m-auto right-0 left-0 text-white opacity-85 rounded-md ' onSubmit={(e)=>e.preventDefault()}>
      
        <p className='font-bold text-xl md:text-3xl my-4 mx-2'>{isSignIn ? "Sign in" :"Sign up"}</p>
        {!isSignIn && <input ref={name} type='text' placeholder='Full Name' className='p-3 mx-1 my-3 rounded-md w-full bg-gray-700'/>}
          <input ref={email} type='text' placeholder='Email ' className='p-3 mx-1 my-3 rounded-md w-full bg-gray-700'/>
       
        <input ref={password} type='text' placeholder='Password' className='p-3 mx-1 my-3 rounded-md w-full  bg-gray-700'/>

        <p className='text-red-400 font-bold text-lg m-2 p-2'>{errMessage}</p>
        <button className='p-3 mx-1  my-4 rounded-lg bg-red-600 w-full ' onClick={handeleBottonClick}>{isSignIn ? "Sign in" :"Sign up"}</button>
        <p className='p-1 m-2 cursor-pointer' onClick={toggleTisgnInForm}>{isSignIn ? "New to Netflix? Sign up now" :"Already a user? Sign in now"}</p>
      </form>
    </div>
  )
}

export default Login
